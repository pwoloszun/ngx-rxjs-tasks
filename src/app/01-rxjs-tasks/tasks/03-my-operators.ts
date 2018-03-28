import { Observable } from 'rxjs/Observable';

import { myFromArray$, myInterval$ } from './01-my-observables';
import { fullObserver } from '../utils';

function myTake$(source$: Observable<any>, count: number) {
  return new Observable((observer) => {
    let i = 0;
    source$.subscribe({
      next(item) {
        observer.next(item);
        i++;
        if (i >= count) {
          observer.complete();
        }
      },
      error(error) {
        observer.error(error);
      },
      complete() {
        observer.complete();
      }
    });

    // TODO: clear up
  });
}

function taskTake() {
  const interval$ = myInterval$(500);
  const firstFour$ = myTake$(interval$, 4);
  firstFour$.subscribe(fullObserver('taskTake'));
}

// TODO task: mySkip$
function mySkip$(source$: Observable<any>, count: number): Observable<any> {
  return null;
}

function taskSkip() {
  const interval$ = myInterval$(500);
  const withoutFirstSeven$ = mySkip$(interval$, 7);
  withoutFirstSeven$.subscribe(fullObserver('taskSkip'));
}

// TODO task: myMap$
function myMap$(source$: Observable<any>, projection: Function): Observable<any> {
  return null;
}

function taskMap() {
  const interval$ = myInterval$(500);
  const mapped$ = myMap$(interval$, (i) => i * 10);
  mapped$.subscribe(fullObserver('taskMap'));
}

// TODO task: myFilter$
function myFilter$(source$: Observable<any>, projection: Function): Observable<any> {
  return null;
}

function taskFilter() {
  const interval$ = myInterval$(500);
  const evens$ = myFilter$(interval$, (i) => i % 2 === 0);
  evens$.subscribe(fullObserver('taskFilter'));
}

// TODO task: myTakeWhile$
function myTakeWhile$(source$: Observable<any>, predicate: Function): Observable<any> {
  return null;
}

function taskTakeWhile() {
  const interval$ = myInterval$(500);
  const evens$ = myTakeWhile$(interval$, (i) => i < 10);
  evens$.subscribe(fullObserver('taskTakeWhile'));
}

// TODO task: myFirst$
function myFirst$(source$: Observable<any>, predicate: Function): Observable<any> {
  return null;
}

function taskFirst() {
  const interval$ = myInterval$(500);
  const evens$ = myFirst$(interval$, (i) => i > 5);
  evens$.subscribe(fullObserver('taskFirst'));
}

// TODO task: myReduce$
function myReduce$(source$: Observable<any>, predicate: Function, startValue?: any): Observable<any> {
  return null;
}

function taskReduce() {
  const interval$ = myFromArray$([3, 4, 10]);
  const evens$ = myReduce$(interval$, (accumulator, item) => accumulator + item);
  evens$.subscribe(fullObserver('taskReduce'));
}

export function myOperatorsApp() {
  // taskTake();
  // taskSkip();
  // taskMap();
  // taskFilter();
  // taskTakeWhile();
  // taskFirst();
  // taskReduce();
}
