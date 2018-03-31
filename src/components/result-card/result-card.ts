import { Component } from '@angular/core';

/**
 * Generated class for the ResultCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'result-card',
  templateUrl: 'result-card.html'
})
export class ResultCardComponent {

  text: string;

  constructor() {
    console.log('Hello ResultCardComponent Component');
    this.text = 'Hello World';
  }

}
