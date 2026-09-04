import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Register } from './login/register/register';
import { ForgotPwd } from './login/forgot-pwd/forgot-pwd';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
  {
    path: 'register',
    loadComponent: () => import('./login/register/register').then((m) => m.Register),
  },
  { path: 'forgotPwd', component: ForgotPwd },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
