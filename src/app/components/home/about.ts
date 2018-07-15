import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from 'rxjs';
import {PrismicService} from '../../services/prismic';

@Component({
  selector: 'app-about',
  templateUrl: './about.html',
  styleUrls: ['./about.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent implements OnInit {
  public members$: Observable<any>;

  constructor(private prismicService: PrismicService) { }

  ngOnInit() {
    this.members$ = this.prismicService.queryMembers();
  }
}
