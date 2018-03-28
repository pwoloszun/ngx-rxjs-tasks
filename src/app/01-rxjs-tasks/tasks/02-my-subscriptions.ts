import { fullObserver } from '../utils';
import { myInterval$ } from './01-my-observables';

function myUnsubscribe() {
  const myInt$ = myInterval$(500);
  const subscription = myInt$.subscribe(fullObserver('unsubscribe interval'));

  setTimeout(() => {
    subscription.unsubscribe();
  }, 2200);
}

export function mySubscriptionsApp() {
  // myUnsubscribe();
}
