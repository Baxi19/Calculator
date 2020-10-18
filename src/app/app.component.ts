import { Component } from '@angular/core';
import { CalculadoraComponent }  from './calculadora/calculadora.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //,directives: [CalculadoraComponent]
})
export class AppComponent {
  title = 'my-app';
}
