import { interval } from 'rxjs/observable/interval';

import { concat, map, merge, take, race, delay } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

import { fullObserver } from '../utils';

function myStream$(tag, delayInMs, value = null) {
  return interval(delayInMs).pipe(
    take(5),
    map((i) => value === null ? `${tag} ${i}` : value)
  );
}

function mergeExample() {
  const quick$ = myStream$('quick', 400);
  const medium$ = myStream$('medium', 1000);
  const slow$ = myStream$('slow', 2200);

  const mergeExample$ = of('MERGE exmpl').pipe(
    merge(quick$, medium$, slow$)
  ).subscribe(fullObserver('merge'));
}

function concatExample() {
  const quick$ = myStream$('quick', 400);
  const medium$ = myStream$('medium', 1000);
  const slow$ = myStream$('slow', 2200);

  const concatExample$ = of('CONCAT exmpl').pipe(
    concat(quick$, medium$, slow$)
  ).subscribe(fullObserver('concat'));

  // never runs
  // interval(500).pipe(
  //   concat(of('This NEVER runs'))
  // ).subscribe(fullObserver('EXMPL never runs'));
}

function raceExample() {
  const quick$ = myStream$('quick', 400);
  const medium$ = myStream$('medium', 1000);
  const slow$ = myStream$('slow', 2200);

  const raceExample$ = of('RACE exmpl').pipe(
    race(quick$, medium$, slow$)
  ).subscribe(fullObserver('race'));
}

// TODO task 1:
// pierwszy stream logIn$:
// co 2.5s ->
// dokladnie 5 razy ->
// generuje obiekt user'a: {identifier: 'batman', lastLoginAt: '12:41:52 AM'}
//
// drugi stream logOut$:
// co 3.2s ->
// dokladnie 3 razy ->
// generuje string 'LOGGED_OUT'
//
// wynikowy stream currentUser$:
// "sledzi" obydwa streamy: login i logout
// generuje: albo obiekt zalogowanego User'a albo null jesli User sie wylogowal
function task1() {
}

// TODO task 2a:
// co delayInMs milisekund ->
// emituj i-ty element tablicy transactions
function userTransactions$(transactions: any[], delayInMs: number) {
  return null;
}

function testUserTransactions() {
  userTransactions$(transactionsArray('Bob'), 1200)
    .subscribe(fullObserver('Bob transactions'));
}

function transactionsArray(tag) {
  return [`${tag} insert card`, `${tag} enter pin`, `${tag} get cash`];
}

// TODO task 2b:
// przy uzyciu userTransactions$() oraz transactionsArray() stworz 3 streamy:
// 1) slowUser$, realizujacy transakcje co 1.2s
// 1) quickUser$, realizujacy transakcje co 0.6s
// 1) superQuickUser$, realizujacy transakcje co 0.25s
// wynikowy stream atm$
function task2() {
}

export function combineMultipleStreamsApp() {
  // mergeExample();
  // concatExample();
  // raceExample();
  // testUserTransactions();
  // task1();
  // task2();
}
