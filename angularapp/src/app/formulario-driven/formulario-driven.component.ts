import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-driven',
  templateUrl: './formulario-driven.component.html',
  styleUrls: ['./formulario-driven.component.css']
})
export class FormularioDrivenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public log(email: String): void {
    console.log(email);
  }

  submitForm(formulario: any): void {

    alert(formulario.valid);
    console.log(formulario.value);
  }

}
