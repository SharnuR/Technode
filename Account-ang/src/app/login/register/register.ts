import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormErrorsComponent } from '../../shared/form-errors-component/form-errors-component';

interface IRegister {
  username: String;
  password: String;
  confirmPwd: String;
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, FormErrorsComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  user: IRegister = {
    username: '',
    password: '',
    confirmPwd: '',
  };
  links: string;

  constructor() {
    this.links =
      '1. https://www.youtube.com/shorts/ZbY9e-L-i8s ' +
      '2. https://www.youtube.com/shorts/ONaSgDK-VzA';
  }

  register(form: NgForm) {
    if (form.valid) {
      alert('form :- ' + form.value.username);
    }
  }

  getFormControl(registerForm: NgForm, name: string) {
    return registerForm.controls[name];
  }
}
