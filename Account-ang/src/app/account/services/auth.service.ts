import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ILogin } from '../models/login.model';
import { HttpClient } from '@angular/common/http';

export interface IRegister {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly storageKey = 'account-users';
  private http = inject(HttpClient);

  login(credentials: ILogin): Observable<any> {
    const users = this.readUsers();
    const valid = users.some(
      (user) => user.email === credentials.email && user.password === credentials.password,
    );

    if (valid && isPlatformBrowser(this.platformId)) {
      localStorage.setItem('account-user', credentials.email);
    }

    return this.loginApi(credentials);
  }

  loginApi(credentials: ILogin): Observable<any> {
    return this.http.post('http://localhost:3000/api/v1/auth/login', credentials);
  }

  register(user: IRegister): Observable<boolean> {
    const users = this.readUsers();
    if (users.some((existingUser) => existingUser.email === user.email)) {
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
