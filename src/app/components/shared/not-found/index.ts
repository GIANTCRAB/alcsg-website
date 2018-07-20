import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
