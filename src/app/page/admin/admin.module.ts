import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AdminRouting } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from 'src/app/component/shared.module';
import { style } from '@angular/animations';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    exports: [
        RouterModule,
        
        DashboardComponent
    ],
    imports: [
        AdminRouting,
        
        RouterModule,
        CommonModule,
        FormsModule,

        SharedModule
    ],
    providers: [
    ],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ]
})
export class AdminModule {}