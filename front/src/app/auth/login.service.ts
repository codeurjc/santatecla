import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

const loginURL = 'api/login';
const logoutURL = 'api/logout';
const currentUserItem = 'currentUser';
const roleAdmin = 'ROLE_ADMIN';

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
    let user = JSON.parse(localStorage.getItem(currentUserItem));
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
    return this.http.get<User>(loginURL, { headers }).pipe(map(user => {
      if (user) {
        this.setCurrentUser(user);
        user.authdata = auth;
        localStorage.setItem(currentUserItem, JSON.stringify(user));
      }
      return user;
    }));
  }

  private setCurrentUser(user: User) {
      this.isLogged = true;
      this.user = user;
      this.isAdmin = this.user.roles.indexOf(roleAdmin) !== -1;
  }

  logout() {
    return this.http.get(logoutURL).pipe(map(response => {
      this.removeCurrentUser();
      return response;
    }));
  }

  removeCurrentUser() {
      localStorage.removeItem(currentUserItem);
      this.isLogged = false;
      this.isAdmin = false;
  }

}
