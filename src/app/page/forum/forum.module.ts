import { NgModule } from '@angular/core';
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
import { AvatarModule } from 'primeng/avatar';

import { ForumRouting } from './forum.routing';
import { ForumDetailComponent } from './detail/forum-detail.component';
import { FormChatComponent } from './insert/form-chat.component';
import { SharedModule } from '../../component/shared.module';
import { EditForumComponent } from './edit/edit-forum.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
@NgModule({
  imports: [
    ForumRouting,
    
    AvatarModule,
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
    DialogModule,
    CalendarModule,
    SharedModule,
    ProgressSpinnerModule
  ],
  declarations: [
    ForumDetailComponent,
    FormChatComponent, 
    EditForumComponent
  ],
  exports: [
    ForumDetailComponent,
    FormChatComponent,
    EditForumComponent
  ],
})
export class ForumModule {}
