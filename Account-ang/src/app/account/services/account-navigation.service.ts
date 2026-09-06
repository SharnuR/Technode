import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccountNavigationService {
  constructor(private router: Router) {}

  goToRoute(routeStr: string) {
    this.router.navigate([routeStr]);
  }
}
