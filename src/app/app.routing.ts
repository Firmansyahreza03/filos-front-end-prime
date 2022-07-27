import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./component/navbar/navbar.component";
import { SharedModule } from "./component/shared.module";
import { AdminComponent } from "./page/admin/admin.component";
import { NotFoundComponent } from "./page/not-found/not-found.component";


const routes: Routes = [
    {
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full',
    },
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () => import('./page/admin/admin.module').then(m => m.AdminModule)
    },
    {
        path: 'landing',
        component: NavbarComponent,
        loadChildren: () => import('./page/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'login',
        component: NavbarComponent,
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: NavbarComponent,
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'home-member',
        component: NavbarComponent,
        loadChildren: () => import('./page/home/home-member.module').then(m => m.HomeMemberModule)
    },
    {
        path: 'thread-detail',
        component: NavbarComponent,
        loadChildren: () => import('./page/thread-detail/thread-detail.module').then(m => m.ThreadDetailModule)
    },
    {
        path: 'event',
        component: NavbarComponent,
        loadChildren: () => import('./page/event/event.module').then(m => m.EventModule)
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', anchorScrolling:'enabled'}),
        SharedModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {

}