import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from './auth/login.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private loginService: LoginService) {}

  login(event: any, user: string, pass: string) {
    event.preventDefault();
    this.loginService.login(user, pass).subscribe(
      (u) => {
        if (u.roles.includes('ROLE_ADMIN')) {
          this.router.navigate(['/']);
        } else {
          this.router.navigate(['/student']);
        }
      },
      (error) => alert('Invalid user or password'),
    );
  }

  logout() {
    this.loginService.logout().subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => console.log('Error when trying to logout: ' + error),
    );
  }

}
