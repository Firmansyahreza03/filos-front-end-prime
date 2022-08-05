import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { WalletDetailComponent } from "./detail/wallet-detail.component";
import { WalletRouting } from "./wallet.routing";

@NgModule({
    imports:[
        WalletRouting,
        CommonModule,
        FormsModule
    ],
    declarations:[
        WalletDetailComponent
    ],
    exports:[
        WalletDetailComponent
    ]
})
export class WalletModule{
    
}