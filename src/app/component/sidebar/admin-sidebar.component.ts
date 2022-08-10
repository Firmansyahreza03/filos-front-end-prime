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
            icon: 'fa fa-industry',
            routerLink: '/admin/industry'
          }
        ],
      },
      {
        label: 'payment',
        items: [{
            label: 'payment',
            icon: 'fa fa-usd',
            routerLink: '/admin/payment'
          }
        ],
      },
      {
        label: 'report',
        items: [{
            label: 'report',
            icon: 'pi pi-flag',
            routerLink: '/admin/report'
          }
        ],
      },
    ]

  }

  ngOnInit() {
    this.initMenu();
  }
}
