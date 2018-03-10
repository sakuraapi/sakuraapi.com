import {
  Component,
  OnInit
}                   from '@angular/core';
import {SwUpdate}   from '@angular/service-worker';
import {LogService} from './shared/services/log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private log: LogService,
              private swUpdate: SwUpdate) {
  }

  ngOnInit() {
    if (this.swUpdate.isEnabled) {
      this
        .swUpdate
        .available
        .subscribe(() => {
          this.log.info('Service worker update available');

          if (confirm('A new version of the site is available. Reload?')) {
            window.location.reload();
          }
        });
    }
  }
}
