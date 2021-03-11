import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioDrivenComponent } from './formulario-driven/formulario-driven.component';

// Decorator
@NgModule({
  // Un modulo agrupa componentes.
  declarations: [
    AppComponent,
    FormularioDrivenComponent
  ],
  // Otros modulos.
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
