import {
  Component,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-tagline-banner',
  templateUrl: './tagline-banner.component.html',
  styleUrls: ['./tagline-banner.component.scss']
})
export class TaglineBannerComponent implements OnInit {

  @Input() size: 'small' | 'medium' = 'small';

  constructor() {
  }

  ngOnInit() {
  }

}
