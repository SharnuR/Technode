import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES } from './account/account.routes';

export const routes: Routes = [
  ...ACCOUNT_ROUTES,
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
