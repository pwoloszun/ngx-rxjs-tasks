import { Observable } from 'rxjs/Observable';
import { myInterval$ } from './01-my-observables';
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

function runMyTake() {
  const interval$ = myInterval$(500);
  myTake$(interval$, 4)
    .subscribe(fullObserver('myTake'));
}

// TODO task: mySkip$

// TODO task: myMap$

// TODO task: myFilter$

// TODO task: myTakeWhile$

// TODO task: myReduce$

export function myOperatorsApp() {
  // runMyTake();
}
