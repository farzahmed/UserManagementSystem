import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
isLoggedIn:string | null = null;

  constructor(private userService: UserService, private router :Router) {
    this.isLoggedIn = localStorage.getItem('loggedInUserEmail');
    console.log("status login from cons ",this.isLoggedIn)
  }

  ngOnInit(): void {
    // this.isLoggedIn = this.userService.isLoggedIn();
    this.isLoggedIn = localStorage.getItem('loggedInUserEmail');
    console.log("status login",this.isLoggedIn)

  }

  logout(): void {
    // this.userService.logout();
    localStorage.clear();
    this.isLoggedIn = null;
    this.router.navigate(['/login'])
  }



}
