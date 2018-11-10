import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {PrismicService} from '../../../services/prismic';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-events-list',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EventsListComponent implements OnInit {
  public events$: Observable<any>;

  constructor(public prismicService: PrismicService) {
  }

  ngOnInit() {
    this.events$ = this.prismicService.queryEvents(9);
  }

}
