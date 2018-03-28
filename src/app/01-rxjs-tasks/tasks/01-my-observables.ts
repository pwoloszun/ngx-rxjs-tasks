import { Observable } from 'rxjs/Observable';

export function myTimeout$(delayInMs: number): Observable<string> {
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

function example1() {
  const timeout$ = myTimeout$(2000); // nothing happens
  // timeout$.subscribe((value: string) => console.log('[NEXT] timeout', value));
  // TODO 1b: next(), error(), complete()

  // TODO 2: each subscribe call generating fn

  // timeout$.subscribe(fullObserver('myTimeout'));
}


// TODO task: myFromArray$
export function myFromArray$(items: any[]): Observable<any> {
  return null; // TODO
}

// TODO task: myRange$
export function myRange$(startValue: number, count: number): Observable<number> {
  return null; // TODO
}

// TODO task: myInterval$
export function myInterval$(delayInMs: number): Observable<number> {
  return null; // TODO
}

// TODO task: myThrow$

// TODO task: myFullObserver(tag)


// more TODO
// TODO task: myFromArrayWithDelay$

// TODO task: myOf$

// TODO task: myTimer$

export function myObservablesApp() {
  example1();
}
