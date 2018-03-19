import {Injectable} from '@angular/core';
import {SwUpdate}   from '@angular/service-worker';

@Injectable()
export class BrowserService {

  constructor(private swWorker: SwUpdate) {
  }

  get hasSessionStorage(): boolean {
    return 'sessionStorage' in this.window;
  }

  get hasLocalStorage(): boolean {
    return 'localStorage' in this.window;
  }

  get hasCache(): boolean {
    return 'caches' in this.window;
  }

  get hasServiceWorker(): boolean {
    // https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker
    return this.swWorker.isEnabled;
  }

  get document(): Document {
    // https://developer.mozilla.org/en-US/docs/Web/API/Document
    return document;
  }

  get window(): Window {
    // https://developer.mozilla.org/en-US/docs/Web/API/Window
    return window;
  }

  get sessionStorage(): WindowSessionStorage {
    return (this.window || {} as any).sessionStorage || null;
  }
}
