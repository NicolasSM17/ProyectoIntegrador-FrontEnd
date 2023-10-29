import { Component } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private userAuthService: UserAuthService, 
              private router: Router,
              public userService: UserService){}

  public isLoggedIn(){
    return this.userAuthService.isLoggedIn();
  }

  public logout(){
    this.userAuthService.clear();
    this.router.navigate(['/'])
  }

  public isAdmin(){
    return this.userAuthService.isAdmin();
  }

  public isUser(){
    return this.userAuthService.isUser();
  }
}
