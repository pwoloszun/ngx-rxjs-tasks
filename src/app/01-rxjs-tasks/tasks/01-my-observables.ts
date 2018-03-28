import { Observable } from 'rxjs/Observable';
import { fullObserver } from '../utils';

function myTimeout$(delayInMs: number): Observable<string> {
  return new Observable((observer) => {
    console.log('generating Observable');
    setTimeout(() => {
      observer.next('Helllo world!');
      // TODO 1a
      // observer.complete();
      // observer.error(new Error('nein!'));
      // observer.next('not availabe');
    }, delayInMs);
  });
}

function runMyTimeout() {
  const timeout$ = myTimeout$(2000); // nothing happens
  // timeout$.subscribe((value: string) => console.log('[NEXT] timeout', value));
  // TODO 1b: next(), error(), complete()

  // TODO 2: each subscribe call generating fn

  // timeout$.subscribe(fullObserver('myTimeout'));
}

// TODO task: myInterval$
export function myInterval$(delayInMs: number) {
  return new Observable((observer) => {
    let i = 0;
    const intervalId = setInterval(() => {
      observer.next(i);
      i++;
    }, delayInMs);
    return () => { // unsubscribe fn
      clearInterval(intervalId);
    };
  });
}

// TODO task: myFromArray$

// TODO task: myRange$

// TODO task: myThrow$

// TODO task: myFullObserver(tag)


// more TODO
// TODO task: myFromArrayWithDelay$

// TODO task: myOf$

// TODO task: myTimer$

// TODO task: myTimeout$


export function myObservablesApp() {
  // runMyTimeout();
}
