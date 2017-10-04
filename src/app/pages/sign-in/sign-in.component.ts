import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {

  user: any = {};
  error: any = false;

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  onSubmit() {
    this.api.auth.signIn(this.user).subscribe(data => {
      this.router.navigate(['hr']);
      this.error = false;
    }, err => {
      console.log('err => ', err);
      this.error = true;
    });
  }

}
