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
import { AvatarModule } from 'primeng/avatar';

import { ForumRouting } from './forum.routing';
import { TimeAgoPipe } from 'src/app/pipe/time-ago.pipe';
import { ThreadDetailComponent } from './detail/thread-detail.component';
import { FormChatComponent } from './insert/form-chat.component';

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
  ],
  declarations: [
    ThreadDetailComponent,
    FormChatComponent, 
    TimeAgoPipe
  ],
  exports: [
    ThreadDetailComponent,
    FormChatComponent,
  ],
})
export class ForumModule {}
