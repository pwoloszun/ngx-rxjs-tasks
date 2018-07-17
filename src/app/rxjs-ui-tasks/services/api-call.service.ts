import { of } from 'rxjs/observable/of';
import { delay, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';

export class MyHttpError extends Error {

  constructor(msg, public status: number) {
    super(msg);
    this.status = status;
  }
}

const delayInMs = 1200;

@Injectable()
export class ApiCallService {

  success$(inUrl, data) {
    return of(inUrl).pipe(
      tap((u) => console.log(`${u} REQUEST...`)),
      delay(delayInMs),
      map((url) => ({url, data, status: 'SUCCESS'}))
    );
  }

  error$(url, errorMsg = 'Some API error') {
    let callsCount = 0;
    return of(callsCount).pipe(
      tap(() => console.log(`Getting API...`, callsCount++)),
      delay(1800),
      map(() => {
        throw new MyHttpError(`${url}: ${errorMsg}`, 503);
      })
    );
  }

}
