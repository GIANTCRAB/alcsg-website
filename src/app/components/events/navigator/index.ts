import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {PrismicService} from '../../../services/prismic';
import {Observable} from 'rxjs';
import {concatMap} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-navigator',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigatorComponent implements OnInit {
  public event$: Observable<any>;

  constructor(private route: ActivatedRoute,
              private prismicService: PrismicService) { }

  ngOnInit() {
    this.event$ = this.route.params
      .pipe(
        concatMap(params => this.prismicService.getPostById('events', params['id']))
      );
  }

}
