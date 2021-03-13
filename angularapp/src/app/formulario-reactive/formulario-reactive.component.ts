import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-formulario-reactive',
  templateUrl: './formulario-reactive.component.html',
  styleUrls: ['./formulario-reactive.component.css']
})
export class FormularioReactiveComponent implements OnInit {

  formulario: FormGroup;

  @Input()
  public emailFromFather: string;

  constructor(private formBuilder: FormBuilder, private service: LoginService) { 
    
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.formulario = this.formBuilder.group(
      {
        email: [this.emailFromFather, [Validators.email, Validators.required]],
        password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(5)]]
      }
    );
  }

  submitForm(): void {
    const email = this.formulario.get('email').value;
    const password = this.formulario.get('password').value;
    let isLogged = this.service.login(email, password);
  }

}
