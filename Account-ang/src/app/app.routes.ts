import { Routes } from '@angular/router';
import { ACCOUNT_ROUTES } from './account/account.routes';
import { FEATURES_ROUTES } from './feature/feature_account';

export const routes: Routes = [
  ...ACCOUNT_ROUTES,
  ...FEATURES_ROUTES,
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];
