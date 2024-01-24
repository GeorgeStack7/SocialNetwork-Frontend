import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Observable, catchError, map, tap, throwError } from 'rxjs';
import { AuthStatus, ILogin, IUser } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private http = inject(HttpClient);

  private _currentUser = signal<IUser | null>(null);
  private _authStatus = signal<AuthStatus>(AuthStatus.checking);

  public currentUser = computed(() => this._currentUser);
  public authStatus = computed(() => this._authStatus);

  constructor() {}

  login(email: string, password: string): Observable<boolean> {
    const baseURL = 'http://brickcode.com.co:5000';
    const url = `${baseURL}/api/auth/login`;

    const body = { email, password };

    return this.http.post<ILogin>(url, body).pipe(
      tap(({ user, token }) => {
        this._currentUser.set(user);
        this._authStatus.set(AuthStatus.authenticated);
        localStorage.setItem('token', token);
      }),
      map(() => true),

      catchError(err => throwError( () => `Algo salio mal, ${err.error.msg}` )
    ));
  }
}
