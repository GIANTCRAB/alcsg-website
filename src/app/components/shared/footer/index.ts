import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public faIcons: any = {
    facebook: faFacebook,
    instagram: faInstagram
  };

  constructor() {
  }

  ngOnInit() {
  }

}
