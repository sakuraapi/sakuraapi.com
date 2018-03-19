import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnInit
}                                from '@angular/core';
import {BrowserService}          from '../../../core/services/browser.service';
import {FeatureCardStateService} from './feature-card-state.service';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.scss']
})
export class FeatureCardComponent implements OnInit {

  @Input() href = '';
  @Input() hidden = false;
  @Input() resetColors = false;

  @HostBinding('attr.border-color') borderColor: number;

  @HostBinding('style.display')
  get display() {
    return this.hidden ? 'none' : '';
  }

  constructor(private browser: BrowserService,
              private cardState: FeatureCardStateService) {

    if (this.resetColors) {
      cardState.resetColor();
    }
    this.borderColor = cardState.nextColor();
  }

  ngOnInit() {
  }

  @HostListener('click')
  onClick() {
    this.browser.window.location.href = this.href;
  }

}
