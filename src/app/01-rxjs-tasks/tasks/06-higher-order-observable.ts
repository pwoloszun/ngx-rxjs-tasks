import { forkJoin } from 'rxjs/observable/forkJoin';
import { interval } from 'rxjs/observable/interval';
import { of } from 'rxjs/observable/of';
import { from } from 'rxjs/observable/from';
import { timer } from 'rxjs/observable/timer';
import { concatMap, delay, exhaustMap, map, mergeAll, mergeMap, switchMap, take, tap, zip } from 'rxjs/operators';

import { fullObserver, items$, randomBetween } from '../utils';

function example1() {
  const numbers$ = items$([1, 2, 3, 4], 800);
  const squaresHOO$ = numbers$.pipe(
    map((i) => i * i) // TODO 1: return Observable
  );
  squaresHOO$.subscribe(fullObserver('HOO example1'));

  // TODO 2: "flatten" stream of streams
}

function fetchUser$(id: number) {
  return of({id, name: `user ${id}`}).pipe(
    delay(1200)
  );
}

function example2() {
  const userIds$ = of(123); // user IDs stream
  userIds$.pipe(
    map((userId) => fetchUser$(userId)),
    mergeAll()
  ).subscribe(fullObserver('example2'));
}

function example3() {
  const first$ = interval(500).pipe(
    take(8),
    map((i) => `FIRST ${i}`)
  );
  const second$ = interval(1200).pipe(
    take(3),
    map((i) => `SECOND ${i * 100}`)
  );

  forkJoin(
    first$,
    second$
  ).subscribe(fullObserver('example3 forkJoin'));
}

function example4() {
  const first$ = interval(500).pipe(
    take(11),
    map((i) => i + 10)
  );
  const second$ = interval(1200).pipe(
    take(5),
    map((i) => i * 10)
  );

  first$.pipe(
    zip(second$, (firstVal, secondVal) => firstVal * secondVal)
  ).subscribe(fullObserver('example4 zip'));
}

// TODO task 1

function task1() {
  const search$ = searchOnServer$('batman', 1200);
  search$.subscribe(fullObserver('task1'));
}

function userInputs$(queries: string[]) {
  let i = 1;
  return from(queries).pipe(
    mergeMap((query) => {
      const ms = randomBetween(1800, 7000);
      i++;
      console.log(`Q: '${query}', within: ${ms}ms`);
      return timer(ms).pipe(
        // tap(() => ),
        map(() => query)
      );
    })
  );
}

function task2() {
  const queries = [
    'doda', 'batman', 'how to become rich'
  ];
  const inputs$ = userInputs$(queries);
  inputs$.subscribe(fullObserver('task2'));
}

// TODO:
// + after delayInMs miliseconds
// + returns Observable with single value: `RESULTS for '${query}'`
// + side effect - logs: `[Searching]\t\t'${query}' results in: ${delayInMs}`
function searchOnServer$(query: string, delayInMs: number) {
  return of(`RESULTS for '${query}'`).pipe(
    tap(() => console.log(`[Searching]\t\t'${query}' results in: ${delayInMs}`)),
    delay(delayInMs)
  );
}

function task3() {
  const queries = [
    'doda', 'batman', 'how to become rich', 'rxjs', 'angular', 'react'
  ];
  const inputs$ = items$(queries, 300).pipe(
    tap((q) => console.log(`[usr input]\t\t'${q}'`))
  );

  // TODO merge
  const searchResults$ = inputs$.pipe(
    mergeMap((q) => searchOnServer$(q, 800))
  );
  searchResults$.subscribe(fullObserver('MERGE_MAP'));
}

function task4() {
  const queries = [
    'doda', 'batman', 'how to become rich', 'rxjs', 'angular', 'react'
  ];
  const inputs$ = items$(queries, 300).pipe(
    tap((q) => console.log(`[usr input]\t\t'${q}'`))
  );

  let i = queries.length;
  // TODO concat
  const searchResults$ = inputs$.pipe(
    concatMap((q) => {
      const ms = 800 * i;
      i--;
      return searchOnServer$(q, ms);
    })
  );
  searchResults$.subscribe(fullObserver('CONCAT_MAP'));
}

function task5() {
  const queries = [
    'doda', 'batman', 'how to become rich', 'rxjs', 'angular', 'react'
  ];
  const inputs$ = items$(queries, 300).pipe(
    tap((q) => console.log(`[usr input]\t\t'${q}'`))
  );

  // TODO switch
  const searchResults$ = inputs$.pipe(
    switchMap((q) => searchOnServer$(q, 800))
  );
  searchResults$.subscribe(fullObserver('SWITCH_MAP'));
}

function task6() {
  const queries = [
    'doda', 'batman', 'how to become rich', 'rxjs', 'angular', 'react'
  ];
  const inputs$ = items$(queries, 300).pipe(
    tap((q) => console.log(`[usr input]\t\t'${q}'`))
  );

  // TODO exhaust
  const searchResults$ = inputs$.pipe(
    exhaustMap((q) => searchOnServer$(q, 800))
  );
  searchResults$.subscribe(fullObserver('EXHAUST_MAP'));
}

export function higherOrderObservablesApp() {
  // example1();
  // example2();
  // example3();
  // example4();
  // task1();
  // task2();
  // task3();
  // task4();
  // task5();
  // task6();
}
