import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './login/register/register';
import { ForgotPwd } from './login/forgot-pwd/forgot-pwd';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'forgotPwd', component: ForgotPwd },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
