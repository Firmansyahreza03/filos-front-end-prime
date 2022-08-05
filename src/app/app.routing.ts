import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainLayoutComponent } from "./component/layout/main-layout.component";
import { AdminLayoutComponent } from "./component/layout/admin-layout.component";

import { SharedModule } from "./component/shared.module";
import { NotFoundComponent } from "./page/not-found/not-found.component";

const routes: Routes = [
    {
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full',
    },
    {
        path: 'landing',
        // component: MainLayoutComponent,
        loadChildren: () => import('./page/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'login',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'home-member',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/home/home-member.module').then(m => m.HomeMemberModule)
    },
    {
        path: 'communities',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/community/community.module').then(m => m.CommunityModule)
    },
    {
        path: 'payment',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/payment/payment.module').then(m => m.PaymentModule)
    },
    {
        path: 'profile',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/profile/profile.module').then(m => m.ProfileModule)
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        loadChildren: () => import('./page/admin/admin.module').then(m => m.AdminModule)
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