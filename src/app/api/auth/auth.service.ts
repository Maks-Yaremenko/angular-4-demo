import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) { }

    signIn(creditionals: any): any {

      return this.http.post('auth/sign-in', creditionals)
        .map((response: any) => {
          return this.handleResponse(response.data);
        });
    }

    logOut(): any {
      localStorage.removeItem('auth-token');
    }

    handleResponse(data: any) {
      let token: string;

      if (data && data.token) {
        token = 'Bearer ' + data.token;
        localStorage.setItem('auth-token', token);
      }

      return data;
    }
}
