import {Injectable}     from '@angular/core';
import * as localforage from 'localforage';
import {Observable}     from 'rxjs/Observable';
import {Subject}        from 'rxjs/Subject';
import {BrowserService} from './browser.service';

export type StorageType = 'local' | 'session';

const PREFIX = 'app';
const CACHE_TTL_PREFIX = 'ttl';

/**
 * Handles local and session storage.
 * For example, to set a session value:
 *    storage.session.setItem('someKey', 'someValue');
 *
 * To store an object (must be JSON.stingifyable):
 *    storage.session.setJson('someKey', {someObject: true});
 *
 * You can also subscribe to an observable for that item:
 *    let someKey$ = storage.session.getObservable('someKey');
 *    someKey$.subscribe({
 *      next: (value) => console.log(value);
 *    });
 *
 *    Once you have an observable, if you call setItem(...) or setJson(...)
 *    the value of the observable's next will be either a string or an Object accordingly.
 *
 * You can clear your storage:
 *    storage.session.clear();
 *
 * You can remove an item:
 *    storage.session.removeItem('someKey');
 *
 *    Note: this will call complete() on the Subject which will cause
 *    complete to fire on the Observables and the Subject will then be deleted.
 *    If you then set a value with the same key, a new Subject will be created
 *    so you need to also get new Observables for it.
 *
 *    As mentioned above, you can call setItem(...) and setJson(...) as many times
 *    as you want, and that will fire the Observables.
 *
 * To change the prefix for the keys, change the storage.prefix value to the string you want.
 */
export abstract class BaseStorageService {

  protected _storageEngine;

  get prefix(): string {
    return PREFIX;
  }

  get cachePostfix(): string {
    return CACHE_TTL_PREFIX;
  }

  /**
   * As items are added, their Subjects are instantiated to allow Observing of that item via
   * [[StorageService.local.getObservable]] or [[StorageService.session.getObservable]].
   */
  private subjects = {};
  private isLocalForage = false;

  constructor(protected store: any) {
    this.isLocalForage = 'setDriver' in this.store;
  }

  clear(): Observable<number> {
    const p = async (): Promise<number> => {

      const len = await this.length().toPromise();
      await this.store.clear();

      const keys = Object.keys(this.subjects);
      for (const key of keys) {
        this.subjects[key].complete();
        delete this.subjects[key];
      }

      return len;
    };

    return Observable.fromPromise(p());
  }

  /**
   * Gets an item from the storage library and supplies the result as an observable.
   * If the key does not exist, getItem() will return null to the subscriber.
   * @param {string} key
   * @returns {Observable<T>}
   */
  getItem<T>(key: string): Observable<T> {
    const p = async (): Promise<T> => {
      let val = await this.store.getItem(this.getKey(key));
      const cache = await this.store.getItem(this.getCacheKey(key));

      // expire if older than cache epoch expiry
      if (cache > 0) {
        const expire = new Date(+cache);
        const now = new Date();
        if (+now > +expire) {
          val = null;
        }
      }

      return val;
    };

    return Observable.fromPromise(p());
  }

  abstract getStorageEngine(): Observable<string>;

  /**
   * Gets an observable that emits an updated value each time its key is set. Use this to monitor changes to a key/value
   * in the store.
   * @param {string} key
   * @returns {Observable<T>}
   */
  observe<T>(key: string): Observable<T> {
    if (!(key in this.subjects)) {
      this.subjects[key] = new Subject<T>();
    }

    return this.subjects[key].asObservable();
  }

  /**
   * Get the name of a key based on its ID.
   * @param {number} keyIndex
   * @returns {Observable<T>}
   */
  key<T>(keyIndex: number): Observable<T> {
    const p = async () => {
      return await this.store.key(keyIndex);
    };

    return Observable.fromPromise(p());
  }

  /**
   * Gets the number of keys in the store. Note that the count will be double what you're expecting because each
   * entry has a corresponding cache ttl entry.
   * @returns {Observable<number>}
   */
  length(): Observable<number> {
    const p = async () => {
      if (typeof this.store.length === 'function') {
        return await this.store.length();
      } else {
        return this.store.length;
      }
    };

    return Observable.fromPromise(p());
  }

  /**
   * Removes the value of a key from the store.
   * @param {string} key
   * @returns {Observable<void>}
   */
  private removeItem(key: string): Observable<void> {
    const p = async () => {

      await Promise.all([
        this.store.removeItem(this.getKey(key)),
        this.store.removeItem(this.getCacheKey(key))
      ]);

      if (key in this.subjects) {
        this.subjects[key].complete();
        delete this.subjects[key];
      }
    };

    return Observable.fromPromise(p());
  }

  /**
   * Saves data to a store and returns that value as an Observable
   * @param {string} key
   * @param {T} value
   * @param {number} cacheTTL the title to live for the item in seconds. Defaults to 0 (disabled)
   * @param {boolean} gc if true, the entry will be actively garbage collected
   * @returns {Observable<T>}
   */
  setItem<T>(key: string, value: T, cacheTTL = 0, gc = false): Observable<T> {
    const p = async () => {
      if (!(key in this.subjects)) {
        this.subjects[key] = new Subject<string>();
      }

      if (cacheTTL > 0) {
        const now = new Date();
        now.setSeconds(now.getSeconds() + cacheTTL);
        cacheTTL = +now;
      }

      await Promise.all([
        this.store.setItem(this.getKey(key), value),
        this.store.setItem(this.getCacheKey(key), cacheTTL)
      ]);

      this.subjects[key].next(value);

      return value;
    };

    return Observable.fromPromise(p());
  }

  private getKey(key: string): string {
    return (this.isLocalForage) ? key : `${this.prefix}-${key}`;
  }

  private getCacheKey(key: string): string {
    return `${this.getKey(key)}-${this.cachePostfix}`;
  }
}

/**
 * Stores items for offline using the best available method in the browser via the localForage library.
 * Values can be any valid type supported by localForage.
 */
@Injectable()
export class LocalStorageService extends BaseStorageService {

  constructor() {
    super(localforage);
    localforage.config({
      name: this.prefix + '_db',
      storeName: this.prefix + '_kv_storage'
    });
  }

  getStorageEngine(): Observable<string> {
    if (!this._storageEngine) {
      return Observable.fromPromise(localforage
        .ready()
        .then<string>(() => {
          this._storageEngine = localforage.driver();
          return this._storageEngine;
        })
        .catch((err) => {
          return Promise.reject(err);
        }));
    }

    return Observable.of(this._storageEngine);
  }
}

/**
 * Stores items in session. Use getJson and setJson to store non-string values.
 */
@Injectable()
export class SessionStorageService extends BaseStorageService {
  constructor(browserService: BrowserService) {
    super(browserService.sessionStorage);
    this._storageEngine = 'session';
  }

  getItem<T>(key: string): Observable<T> {
    return super
      .getItem<T>(key)
      .map((r: any) => {
        let val;
        try {
          val = JSON.parse(r);
        } catch (e) {
          val = r;
        }
        return val;
      });
  }

  getStorageEngine(): Observable<string> {
    return Observable.of(this._storageEngine);
  }

  setItem<T>(key: string, value: T, cacheTTL = 0, gc = false): Observable<T> {
    let val: any = value;
    if (typeof value !== 'string') {
      try {
        val = JSON.stringify(val);
      } finally {
      }
    }

    return super
      .setItem<T>(key, val, cacheTTL, gc)
      .map((r: any) => {
        let result;
        try {
          result = JSON.parse(r);
        } catch (e) {
          result = r;
        }

        return result;
      });
  }
}
