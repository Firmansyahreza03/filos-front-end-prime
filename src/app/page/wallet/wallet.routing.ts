import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WalletDetailComponent } from "./detail/wallet-detail.component";

const routes:Routes=[
    {
        path:'',
        component:WalletDetailComponent
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
export class WalletRouting{

}