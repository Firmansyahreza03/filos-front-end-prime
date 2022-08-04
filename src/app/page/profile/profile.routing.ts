import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditPasswordComponent } from "./edit-password/edit-password.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes:Routes=[
    {
        path:'',
        component: EditProfileComponent
    },
    {
        path:'edit-password',
        component: EditPasswordComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class ProfileRouting{
    
}