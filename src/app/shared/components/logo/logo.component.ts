import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import {
  Component,
  HostListener,
  Input,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  animations: [
    trigger('rotatedState', [
      state('default', style({transform: 'rotate(0deg)'})),
      state('rotated', style({transform: 'rotate(360deg)'})),
      transition('rotated => default', animate(0)),
      transition('default => rotated', animate(500))
    ])
  ]
})
export class LogoComponent implements OnInit {

  rotatedState = 'default';
  @Input() showTitle = false;

  ngOnInit() {
    this.rotateLogo();
  }

  @HostListener('window:resize')
  rotateLogo() {
    this.rotatedState = 'default';
    setTimeout(() => {
      this.rotatedState = 'rotated';
    }, 1000);
  }
}
