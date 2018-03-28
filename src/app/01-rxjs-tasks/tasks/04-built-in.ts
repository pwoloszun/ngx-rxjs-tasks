// Observable creators
import { interval } from 'rxjs/observable/interval';
import { from } from 'rxjs/observable/from';
import { range } from 'rxjs/observable/range';
import { _throw } from 'rxjs/observable/throw';

// operators
import {
  map,
  filter,
  reduce,
  take,
  takeWhile,
  skip,
  delay,
  tap,
  // TODO
  buffer,
  bufferTime,
  bufferCount,
  first,
  catchError,
  retry, skipWhile,
} from 'rxjs/operators';

import { fullObserver } from '../utils';

// TODO example 1:
// bierz imiona dopoki !== 'ADMIN' ->
// przemapuj je na powitania: 'Hello X' ->
// opoznij o 1.2s ->
// wyniki zaloguj na konsoli
function example1() {
  const names = ['bob', 'ed', 'kate', 'ADMIN', 'boby'];

  const names$ = from(names);
  names$.pipe(
    takeWhile((name) => name.toUpperCase() !== 'ADMIN'),
    map((name) => `Hello ${name}!`),
    delay(1200)
  ).subscribe(fullObserver('example1'));
}

// TODO example 2:
// co 1.2s wez i-te imie ->
// przemapuj je na powitania: 'Hello X' ->
// wyniki zaloguj na konsoli
function example2() {
  const names = ['bob', 'ed', 'kate', 'ADMIN', 'boby'];

  const names$ = interval(1200);
  names$.pipe(
    map((i) => names[i]),
    takeWhile((name) => name.toUpperCase() !== 'ADMIN'),
    map((name) => `Hello ${name.toUpperCase()}!`)
    // delay(1200),
  ).subscribe(fullObserver('example2'));
}

// TODO task 1:
// wygeneruj liczby z przedzialu [5..21] ->
// odfiltruj tylko nieparzyste ->
// pomin pierwsze 3 ->
// z pozostalych wez tylko pierwsze 4 ->
// przemapuj na kwadraty tych liczb ->
// wyniki zaloguj na konsoli
function task1() {
}

// TODO task 2:
// stworz interwal co 0.8s ->
// wez tylko 10 pierwszych wynikow ->
// obliczaj iloczyn wszystkich dotychczas wygenerowanych liczb ->
// kazdy posredni wynik zaloguj na konsoli ->
// ostateczny iloczyn zaloguj na konsoli
function task2() {
}

// TODO task 3:
// co 1s generuj kolejna liczbe parzysta ->
// bierz liczy dopoki (i < 20) ->
// oblicz sume wszystkich liczb ->
// wynik zaloguj na konsoli
function task3() {
}

// TODO task 4:
// co 0.1s generuj kolejna liczbe naturalna, poczawszy od 10 ->
// wez pierwsze 110 takich liczb ->
// zbuforuj w "slice'y" po 25 sztuk ->
// bierz slice'y dopoki pierwszy element slice'a < 70
// wez (first) pierwszy taki slice, w ktorym pierwszy element slice'a > 30
// wyniki zaloguj na konsoli
function task4() {
  interval(100).pipe(
    take(110),
    map((i) => i + 10),
    bufferCount(25),
    takeWhile((slice: number[]) => {
      return slice[0] < 70;
    }),
    first((slice) => slice[0] > 30)
    // first((x) => x > 10 && x < 90)
  ).subscribe(fullObserver('task4'));
}


// TODO task 5:
// co 0.1s generuj liczbe naturalna ->
// przemapuj ja na kwadrat tej liczby ->
// pomijaj te liczby dopoki: (n / 100) < 100 ->
// bierz te liczby dopoki: n < 20000 ->
// buforuj wyniki i wydawaj je za kazdym razem gdy everyTwoSeconds$ cos emituje
// wyniki zaloguj na konsoli
function task5() {
  const everyTwoSeconds$ = interval(2000);

  interval(100).pipe(
    map((i) => i * i),
    skipWhile((n) => {
      return (n / 100) < 100;
    }),
    takeWhile((n) => n < 20000),
    buffer(everyTwoSeconds$)
  ).subscribe(fullObserver('task5'));
}


export function builtInApp() {
  // example1();
  // example2();
  // task1();
  // task2();
  // task3();
  // task4();
  task5();
}
