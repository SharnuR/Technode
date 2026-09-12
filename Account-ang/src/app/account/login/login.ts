import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

import { FormErrorsComponent } from '../../shared/form-errors-component/form-errors-component';
import { ILogin } from '../models/login.model';
import { NotificationService } from '../../shared/services/notification.service';
import { AccountNavigationService } from '../services/account-navigation.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule, FormErrorsComponent],
  templateUrl: './login.html',
  styleUrl: './login.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  loginData: ILogin = {
    email: 'user@example.com',
    password: '123',
  };

  constructor(
    private router: Router,
    private notificationService: NotificationService,
    private accountNavigationService: AccountNavigationService,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (!form?.valid) {
      this.notificationService.warning('Please complete the form.');
      return;
    }

    this.authService.login(this.loginData).subscribe({
      next: (data) => {
        if (!data) {
          this.notificationService.error('Invalid email or password.');
        }

        this.notificationService.success('Login successful.');
        this.accountNavigationService.goToRoute('dashboard');
      },

      error: (err) => {
        console.log('err:- ', err);
        this.notificationService.error(err.error.error);
      },
    });
  }

  register() {
    this.accountNavigationService.goToRoute('register');
  }

  forgotPwd() {
    this.accountNavigationService.goToRoute('forgotPwd');
  }
}
