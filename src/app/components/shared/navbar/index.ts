import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faBars} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnInit {
  public isCollapsed = true;
  public faBars = faBars;

  constructor() {
  }

  ngOnInit() {
  }

  public toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
