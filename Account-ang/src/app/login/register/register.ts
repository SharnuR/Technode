import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormErrorsComponent } from '../../shared/form-errors-component/form-errors-component';
import { ToastrService } from 'ngx-toastr';

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
  animations: [{ name: 'flyInOut', definitions: [] }],
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

  constructor(private toastr: ToastrService) {}

  onFieldChange(fieldName: keyof typeof this.user, value: string) {
    this.user[fieldName] = value;
  }

  register(form: NgForm) {
    if (form.valid) {
      this.toastr.success('form :- ' + form.value.username);
    }
  }
}
