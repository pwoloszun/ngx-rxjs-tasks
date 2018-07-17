import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs/observable/interval';
import {
  retry,
  catchError,
  map,
  take,
} from 'rxjs/operators';

import { fullObserver } from '../../01-rxjs-tasks/utils';
import { ApiCallService } from '../services/api-call.service';


@Component({
  selector: 'nts-complex-task',
  templateUrl: './complex-task.component.html',
  styleUrls: ['./complex-task.component.css']
})
export class ComplexTaskComponent implements OnInit {

  constructor(private apiCallService: ApiCallService) {
  }

  ngOnInit() {
  }

  fetchData() {
    // TODO
  }

}
