import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const LOGIN_URL = 'api/login';
const LOGOUT_URL = 'api/logout';
const CURRENT_USER_ITEM = 'currentUser';
const ROLE_ADMIN = 'ROLE_ADMIN';

export interface User {
  id?: number;
  name: string;
  roles: string[];
  authdata: string;
}

@Injectable()
export class LoginService {

  isLogged = false;
  isAdmin = false;
  user: User;
  auth: string;

  constructor(private http: HttpClient) {
    let user = JSON.parse(localStorage.getItem(CURRENT_USER_ITEM));
    if (user) {
      this.setCurrentUser(user);
    }
  }

  login(user: string, pass: string) {
    let auth = window.btoa(user + ':' + pass);
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + auth,
      'X-Requested-With': 'XMLHttpRequest',
    });
    return this.http.get<User>(LOGIN_URL, { headers }).pipe(map(user => {
      if (user) {
        this.setCurrentUser(user);
        user.authdata = auth;
        localStorage.setItem(CURRENT_USER_ITEM, JSON.stringify(user));
      }
      return user;
    }));
  }

  private setCurrentUser(user: User) {
      this.isLogged = true;
      this.user = user;
      this.isAdmin = this.user.roles.indexOf(ROLE_ADMIN) !== -1;
  }

  logout() {
    return this.http.get(LOGOUT_URL).pipe(map(response => {
      this.removeCurrentUser();
      return response;
    }));
  }

  removeCurrentUser() {
      localStorage.removeItem(CURRENT_USER_ITEM);
      this.isLogged = false;
      this.isAdmin = false;
  }

}
