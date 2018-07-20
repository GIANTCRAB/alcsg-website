import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
  public faIcons: any = {
    email: faEnvelopeOpen,
    facebook: faFacebook,
    instagram: faInstagram
  };

  constructor() {
  }

  ngOnInit() {
  }

}
