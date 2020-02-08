import { Component } from '@angular/core';
import {collegueMock} from './mock/collegues.mock';
import {matriculeMock} from './mock/matricules.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'collegues-front';
  collegueFictif = collegueMock;
  matriculeFictif = matriculeMock;
}
