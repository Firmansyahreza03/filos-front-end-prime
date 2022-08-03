import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['../../../assets/sass/sakai.scss', './admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  items!: MenuItem[]

  constructor(
    private router: Router
  ) {}

  initMenu() {
    this.items = [{
        label: 'Home',
        items: [{
          label: 'Dashboard',
          icon: 'pi pi-home',
          routerLink: '/admin'
        }]
      },
      {
        label: 'Program',
        items: [{
            label: 'Comunity',
            icon: 'pi pi-star',
            routerLink: '/admin/community'
          },
          {
            label: 'Article',
            icon: 'pi pi-inbox',
            routerLink: '/admin/article'
          },
          {
            label: 'Thread',
            icon: 'pi pi-comments',
            routerLink: '/admin/thread'
          }
        ]
      },
      {
        label: 'User',
        items: [{
            label: 'Users',
            icon: 'pi pi-user',
            routerLink: '/admin/user'
          },
          {
            label: 'Industry',
            icon: 'pi pi-flag',
            routerLink: '/admin/industry'
          }
        ],
      },
      {
        label: 'Subscription',
        items: [{
            label: 'Subscription',
            icon: 'pi pi-user',
            routerLink: '/admin'
          }
        ],
      },
    ]

  }

  ngOnInit() {
    this.initMenu();
  }
}
