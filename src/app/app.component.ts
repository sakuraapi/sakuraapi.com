import {
  Component,
  OnInit
}                            from '@angular/core';
import {SwUpdate}            from '@angular/service-worker';
import {BrowserService}      from './core/services/browser.service';
import {LogService}          from './core/services/log.service';
import {LocalStorageService} from './core/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private browser: BrowserService,
              private log: LogService,
              private store: LocalStorageService,
              private swUpdate: SwUpdate) {
  }

  async ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this
        .swUpdate
        .available
        .subscribe(() => {
          this.log.info('Service worker update available');

          if (confirm('A new version of the site is available. Reload?')) {
            this.browser.window.location.reload();
          }
        });
    }
  }
}
