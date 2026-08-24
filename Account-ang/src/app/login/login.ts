import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormErrorsComponent } from '../shared/form-errors-component/form-errors-component';

interface ILogin {
  username: String;
  password: String;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, FormErrorsComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  loginData: ILogin = {
    username: '',
    password: '',
  };

  constructor(private router: Router) {}

  ngOnInit() {
    this.loginData.username = 'SharnuR';
  }

  login(form: NgForm) {
    if (form?.valid) {
      alert('registerd user, login successfull:  ' + this.loginData.username);
    } else {
      this.router.navigate(['/register']);
    }
  }

  register() {
    this.router.navigate(['register']);
  }

  forgotPwd() {
    this.router.navigate(['/forgotPwd']);
  }
}
