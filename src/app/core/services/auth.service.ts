import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@enviroments/environment';

// encode btoa, decode atob
export interface Credential {
  email: string;
  password: string;
}

export interface LogInResponse {
  token: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  logIn(credential: Credential): Observable<LogInResponse> {
    return this.http.post<LogInResponse>(
      `${environment.apiUrl}/users/login`,
      credential
    );
  }

  encryptToken(data: LogInResponse): string {
    return btoa(JSON.stringify(data));
  }

  decodeToken(): string | null {
    const tokenFromStorage = localStorage.getItem('userInfo');

    if (!tokenFromStorage) return null;

    return atob(tokenFromStorage);
  }

  saveToken(data: string): void {
    localStorage.setItem('userInfo', data);
  }

  getToken(): LogInResponse | null {
    const decoded = this.decodeToken();

    return decoded ? JSON.parse(decoded) : null;
  }
}
