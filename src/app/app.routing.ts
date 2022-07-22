import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarMemberComponent } from "./component/navbar-member/navbar-member.component";
import { NavbarMemberModule } from "./component/navbar-member/navbar-member.module";


const routes: Routes = [
    {
        path: 'landing',
        component: NavbarMemberComponent,
        loadChildren: () => import('./page/landing/landing.module').then(m => m.LandingModule)
    },
    {
        path: 'login',
        component: NavbarMemberComponent,
        loadChildren: () => import('./page/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'register',
        component: NavbarMemberComponent,
        loadChildren: () => import('./page/register/register.module').then(m => m.RegisterModule)
    },
    {
        path: 'home-member',
        component: NavbarMemberComponent,
        loadChildren: () => import('./page/member/home-member/home-member.module').then(m => m.HomeMemberModule)
    }
]
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        NavbarMemberModule
    ],
    exports: [
        RouterModule
    ]
})
export class AppRouting {

}