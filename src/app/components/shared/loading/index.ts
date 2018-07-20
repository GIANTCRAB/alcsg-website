import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-loading',
  templateUrl: './index.html',
  styleUrls: ['./index.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoadingComponent implements OnInit {
  public faSpinner = faSpinner;

  constructor() {
  }

  ngOnInit() {
  }

}
