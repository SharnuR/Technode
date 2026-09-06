import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  { path: 'login', loadComponent: () => import('./login/login').then((m) => m.Login) },
  {
    path: 'register',
    loadComponent: () => import('./login/register/register').then((m) => m.Register),
  },
  {
    path: 'forgotPwd',
    loadComponent: () => import('./login/forgot-pwd/forgot-pwd').then((m) => m.ForgotPwd),
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
