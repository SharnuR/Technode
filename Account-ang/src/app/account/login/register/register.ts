import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

import { FormErrorsComponent } from '../../../shared/form-errors-component/form-errors-component';
import { NotificationService } from '../../../shared/services/notification.service';
import { AccountNavigationService } from '../../services/account-navigation.service';
import { AuthService } from '../../services/auth.service';

interface IRegister {
  username: string;
  password: string;
  confirmPwd: string;
}

@Component({
  selector: 'app-register',
  imports: [FormsModule, FormErrorsComponent],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Register {
  user: IRegister = {
    username: '',
    password: '',
    confirmPwd: '',
  };
  links: string =
    '1. https://www.youtube.com/shorts/ZbY9e-L-i8s ' +
    '2. https://www.youtube.com/shorts/ONaSgDK-VzA';

  constructor(
    private notificationService: NotificationService,
    private authService: AuthService,
    private accountNavigationService: AccountNavigationService,
  ) {}

  onFieldChange(fieldName: keyof typeof this.user, value: string) {
    this.user[fieldName] = value;
  }

  register(form: NgForm) {
    if (!form.valid || this.user.password !== this.user.confirmPwd) {
      this.notificationService.warning('Complete the form and make sure passwords match.');
      return;
    }

    this.authService
      .register({ username: this.user.username, password: this.user.password })
      .subscribe((registered) => {
        if (registered) {
          this.notificationService.success('Registration successful.');
          this.accountNavigationService.goToRoute('login');
        } else {
          this.notificationService.error('That username is already registered.');
        }
      });
  }
}
