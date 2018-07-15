import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faUsers, faBook, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public faIcons: any = {
    volunteer: faUsers,
    learn: faBook,
    sponsor: faHandHoldingHeart
  };

  constructor() {
  }

  ngOnInit() {
  }

}
