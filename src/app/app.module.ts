import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { CalculadoraService } from './calculadora/calculadora.service';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculadoraService],
  bootstrap: [AppComponent]
})
export class AppModule { }
