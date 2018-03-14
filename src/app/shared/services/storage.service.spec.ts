import {TestBed}        from '@angular/core/testing';
import {Observable}     from 'rxjs/Observable';
import {MockSwProvider} from '../../app.component.spec';
import {SharedModule}   from '../shared.module';
import {
  LocalStorageService,
  SessionStorageService
}                       from './storage.service';

fdescribe('StorageService', () => {

  const store = {
    local: undefined as LocalStorageService,
    session: undefined as SessionStorageService
  };
  const stores = Object.keys(store);

  beforeEach(async (done) => {
    TestBed
      .configureTestingModule({
        imports: [
          SharedModule
        ],
        providers: [
          MockSwProvider
        ]
      });

    store.local = TestBed.get(LocalStorageService);
    store.session = TestBed.get(SessionStorageService);

    Observable
      .forkJoin([
        store.local.clear(),
        store.session.clear()
      ])
      .subscribe(done, done.fail);
  });

  afterEach((done) => {
    Observable
      .forkJoin([
        store.local.clear(),
        store.session.clear()
      ])
      .subscribe(done, done.fail);
  });

  it('clear', async (done) => {
    try {

      for (const type of stores) {
        await store[type].setItem('clear-test', true).toPromise();
        expect(await store[type].length().toPromise()).toBe(2);
        expect(await store[type].clear().toPromise()).toBe(2);
        expect(await store[type].length().toPromise()).toBe(0);
      }

      done();
    } catch (err) {
      done.fail(err);
    }

  });

  describe('getItem', () => {
    it('string', async (done) => {
      try {
        for (const type of stores) {
          await store[type].setItem('test', 'test value').toPromise();
          expect(await store[type].getItem('test').toPromise()).toBe('test value');
        }

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('number', async (done) => {
      try {
        for (const type of stores) {
          await store[type].setItem('test', 777).toPromise();
          const n = await store[type].getItem('test').toPromise();
          expect(typeof n === 'number').toBeTruthy('should have been a number');
          expect(n).toBe(777);
        }

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('object', async (done) => {
      try {
        for (const type of stores) {
          await store[type].setItem('test', {test: 'value'}).toPromise();
          expect((await store[type].getItem('test').toPromise()).test).toBe('value');
        }
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('array', async (done) => {
      try {
        for (const type of stores) {
          await store[type].setItem('test', [1, 2, 3, 4, 5]).toPromise();
          expect(await store[type].getItem('test').toPromise()).toEqual([1, 2, 3, 4, 5]);
        }
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  describe('observe', () => {
    it('emits when setItem updates an entry', async (done) => {
      try {
        for (const type of stores) {

          await store[type].setItem('test', 'test value').toPromise();
          expect(await store[type].getItem('test').toPromise()).toBe('test value');

          let updatedValue = '';
          const o = store[type]
            .observe('test')
            .subscribe((update) => updatedValue = update);

          await store[type].setItem('test', 'test value updated').toPromise();
          expect(updatedValue).toBe('test value updated');
          o.unsubscribe();
        }
        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('allows subscription before value set', async (done) => {
      try {
        for (const type of stores) {
          let updatedValue = '';
          const o = store[type]
            .observe('test')
            .subscribe((update) => updatedValue = update);

          await store[type].setItem('test', 'test value').toPromise();
          expect(await store[type].getItem('test').toPromise()).toBe('test value');

          await store[type].setItem('test', 'test value updated').toPromise();
          expect(updatedValue).toBe('test value updated');
          o.unsubscribe();
        }
        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });

  it('removeItem', async (done) => {
    try {
      for (const type of stores) {
        await store[type].setItem('test', 'test value').toPromise();
        expect(await store[type].getItem('test').toPromise()).toBe('test value');

        await store[type].removeItem('test').toPromise();
        expect(await store[type].getItem('test').toPromise()).toBe(null);
      }

      done();
    } catch (err) {
      done.fail(err);
    }
  });

  describe('setItem', () => {
    it('basic function', async (done) => {
      // developer note: the various tests for setting are taken care of in the getItem section above.
      try {
        for (const type of stores) {
          expect(await store[type].setItem('test', 'test value').toPromise()).toBe('test value');
          expect(await store[type].getItem('test').toPromise()).toBe('test value');
        }

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    it('sets value and cache entry', async (done) => {
      try {
        for (const type of stores) {
          await store[type].setItem('test', 'test value').toPromise();

          const valueField = (type === 'session')
            ? `${store.session.prefix}-test`
            : 'test';
          const cacheField = (type === 'session')
            ? `${store.session.prefix}-test-${store.session.cachePostfix}`
            : 'test-ttl';
          expect(await store[type].key(0).toPromise()).toBe(valueField, type);
          expect(await store[type].key(1).toPromise()).toBe(cacheField, type);
        }

        done();
      } catch (err) {
        done.fail(err);
      }
    });

  });

  describe('cache expiration', () => {
    it('expires value', async (done) => {

      try {

        for (const type of stores) {
          await store[type].setItem('test', 'should be expired (null)', 1).toPromise();
          expect(await store[type].getItem('test').toPromise()).toBe('should be expired (null)', type);
          // wait two seconds
          await new Promise((resolve) => setTimeout(resolve, 1010));
          expect(await store[type].getItem('test').toPromise()).toBe(null, type);
        }

        done();
      } catch (err) {
        done.fail(err);
      }

    });
  });
});
