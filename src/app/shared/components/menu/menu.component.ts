import {
  Component,
  HostBinding,
  Input,
  OnInit
}               from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @HostBinding('class.vertical')
  @Input() vertical = false;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onHome() {
    this.router.navigate(['/home']);
  }

}
