import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { FormErrorsComponent } from '../shared/form-errors-component/form-errors-component';
import { ToastrService } from 'ngx-toastr';

interface ILogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, FormErrorsComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  animations: [{ name: 'flyInOut', definitions: [] }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  loginData: ILogin = {
    username: '',
    password: '',
  };

  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form?.valid) {
      this.toastr.success('registerd user, login successfull:  ' + this.loginData.username);
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
