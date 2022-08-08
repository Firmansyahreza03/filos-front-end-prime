import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

import { HomeMemberRouting } from './home-member.routing';
import { threadReducer } from './member/home-member.reducer';
import { LeftPageComponent } from './member/left-page/left-home.component';
import { RightPageComponent } from './member/right-page/right-home.component';
import { FormComponent } from './member/form/form.component';
import { SharedModule } from 'src/app/component/shared.module';
import { ForumDetailComponent } from '../forum/detail/forum-detail.component';
import { HomeMemberComponent } from './member/home-member.component';

@NgModule({
  imports: [
    HomeMemberRouting,
    
    CardModule,
    TabViewModule,
    FormsModule,
    CommonModule,
    DropdownModule,
    InputTextModule,
    InputTextareaModule,
    ButtonModule,
    DividerModule,
    FileUploadModule,
    HttpClientModule,
    StoreModule.forFeature('thread', threadReducer),
    DialogModule,
    CalendarModule,
    SharedModule
  ],
  declarations: [
    HomeMemberComponent, 
    LeftPageComponent,
    RightPageComponent,
    FormComponent,
  ],
  exports: [
    HomeMemberComponent, 
    LeftPageComponent,
    RightPageComponent,
    FormComponent,
  ],
})
export class HomeMemberModule {}
