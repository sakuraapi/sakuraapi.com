// This file is required by karma.conf.js and loads recursively all the .spec and framework files
/*
 * AUTO FORMATTING IDE WARNING:
 * import 'zone.js/dist/zone-testing'; must be imported first or your tests aren't going to work.
 */

import 'zone.js/dist/zone-testing';

import {getTestBed} from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
}                   from '@angular/platform-browser-dynamic/testing';

declare const require: any;

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
