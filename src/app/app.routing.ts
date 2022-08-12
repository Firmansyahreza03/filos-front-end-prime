
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainLayoutComponent } from "./component/layout/main-layout.component";
import { AdminLayoutComponent } from "./component/layout/admin-layout.component";

import { SharedModule } from "./component/shared.module";
import { NotFoundComponent } from "./page/not-found/not-found.component";
import { AlreadyLoginGuard, LoginGuard } from './guard/guard-import';

const routes: Routes = [
    {
        path: 'landing',
        loadChildren: () => import('./page/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'login',
        component: MainLayoutComponent,
        canLoad : [AlreadyLoginGuard],
        loadChildren: () => import('./page/auth/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: MainLayoutComponent,
        canLoad : [AlreadyLoginGuard],
        loadChildren: () => import('./page/auth/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'home-member',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/home/home-member.module').then(m => m.HomeMemberModule)
    },
    {
        path: 'home-landing',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/home/home-not-member.module').then(m => m.HomeNotMemberModule)
    },
    {
        path: 'forum',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/forum/forum.module').then(m => m.ForumModule)
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
        path: 'articles',
        component: MainLayoutComponent,
        loadChildren: () => import('./page/article/article-member.module').then(m => m.ArticleMemberModule)
    },
    {
        path: 'admin',
        component: AdminLayoutComponent,
        loadChildren: () => import('./page/admin/admin.module').then(m => m.AdminModule)
    },
    {
      path: '',
      redirectTo: '/landing',
      pathMatch: 'full',
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