import { Component } from '@angular/core';

@Component({
  selector: 'mfe-lab-ng-app-entry',
  template: `<h1>Remote Angular
    <img src="https://angular.io/assets/images/logos/angular/angular.svg" width="30">
    </h1>
    <mfe-lab-counter></mfe-lab-counter>`,
})
export class RemoteEntryComponent {}
