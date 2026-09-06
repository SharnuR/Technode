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
    private notificationService: NotificationService,
    private accountNavigationService: AccountNavigationService,
    private authService: AuthService,
  ) {}

  ngOnInit() {}

  login(form: NgForm) {
    if (form?.valid) {
      this.authService.login(this.loginData).subscribe((loggedIn) => {
        if (loggedIn) {
          this.notificationService.success('Login successful.');
        } else {
          this.notificationService.error('Invalid username or password.');
        }
      });
    } else {
      this.notificationService.warning('Please complete the form.');
    }
  }

  register() {
    this.accountNavigationService.goToRoute('register');
  }

  forgotPwd() {
    this.accountNavigationService.goToRoute('forgotPwd');
  }
}
