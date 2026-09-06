import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILogin } from '../models/login.model';

export interface IRegister {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'account-users';

  login(credentials: ILogin): Observable<boolean> {
    const users = this.readUsers();
    const valid = users.some(
      (user) => user.username === credentials.username && user.password === credentials.password,
    );

    if (valid && isPlatformBrowser(this.platformId)) {
      localStorage.setItem('account-user', credentials.username);
    }

    return of(true);
    // return of(valid);
  }

  register(user: IRegister): Observable<boolean> {
    const users = this.readUsers();
    if (users.some((existingUser) => existingUser.username === user.username)) {
      return of(false);
    }

    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.storageKey, JSON.stringify([...users, user]));
    }

    return of(true);
  }

  private readUsers(): IRegister[] {
    if (!isPlatformBrowser(this.platformId)) return [];

    const storedUsers = localStorage.getItem(this.storageKey);
    if (!storedUsers) return [];

    try {
      return JSON.parse(storedUsers) as IRegister[];
    } catch {
      return [];
    }
  }
}
