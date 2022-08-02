import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'

})
export class NavbarComponent implements OnInit {
  items: MenuItem[] = [];
  constructor(public router: Router) {}
  ngOnInit() {
    this.items = [{
      label: 'Menu',
      items: [{
          label: 'Landing',
          routerLink: '/landing'
        },
        {
          label: 'Login',
          routerLink: '/login'
        },
        {
          label: 'Register',
          routerLink: '/register'
        },
        {
          label: 'Home',
          routerLink: '/home-member'
        },
        {
          label: 'Community',
          routerLink: '/communities'
        },
      ]
    },
    {
      label: 'To Admin',
      routerLink: '/admin'
    }];
  }
  logout(): void {
    localStorage.clear()
    this.router.navigateByUrl('/login')
  }
}
