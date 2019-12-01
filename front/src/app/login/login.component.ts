import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private loginService: LoginService,) {
  }

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

}
