import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authFlag: boolean;
  public authState;

  constructor(private router: Router) { }

  ngOnInit() {
    this.authState = 'none';
  }

  logIn(){
    //this.router.navigate(['/register']);
  }

  register() {
    //this.router.navigate(['/login']);
  }
}
