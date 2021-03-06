import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {faUsers, faBook, faHandHoldingHeart} from '@fortawesome/free-solid-svg-icons';
import {PrismicService} from '../../services/prismic';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  public events$: Observable<any>;
  public upcomingEvents$: Observable<any>;

  public faIcons: any = {
    volunteer: faUsers,
    learn: faBook,
    sponsor: faHandHoldingHeart
  };

  constructor(public prismicService: PrismicService) {
  }

  ngOnInit() {
    this.events$ = this.prismicService.queryEvents();
    this.upcomingEvents$ = this.prismicService.queryUpcomingEvents();
  }

}
