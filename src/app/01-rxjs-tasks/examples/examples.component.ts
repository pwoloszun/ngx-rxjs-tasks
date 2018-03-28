import { Component } from '@angular/core';

import { myObservablesApp } from '../tasks/01-my-observables';
import { mySubscriptionsApp } from '../tasks/02-my-subscriptions';
import { myOperatorsApp } from '../tasks/03-my-operators';
import { builtInApp } from '../tasks/04-built-in';
import { combineMultipleStreamsApp } from '../tasks/05-combine-mutiple-streams';
import { higherOrderObservablesApp } from '../tasks/06-higher-order-observable';

myObservablesApp();
mySubscriptionsApp();
myOperatorsApp();
builtInApp();
combineMultipleStreamsApp();
higherOrderObservablesApp();

@Component({
  selector: 'nts-examples',
  templateUrl: './examples.component.html',
})
export class ExamplesComponent {

  run() {
    // myObservablesApp();
  }
}
