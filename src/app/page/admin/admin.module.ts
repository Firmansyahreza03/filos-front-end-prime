import { SharedModule } from 'primeng/api';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { style } from '@angular/animations';

import { AdminRouting } from './admin.routing';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndustyModule } from './industy/industry.module';

@NgModule({
    declarations: [
        DashboardComponent,
    ],
    exports: [
        RouterModule,
        
        DashboardComponent,
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