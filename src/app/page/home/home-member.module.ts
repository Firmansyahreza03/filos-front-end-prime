import { NgModule } from '@angular/core';
import { HomeMemberComponent } from './member/home-member.component';
import { HomeMemberRouting } from './home-member.routing';
import { CardModule } from 'primeng/card';
import { TabViewModule } from 'primeng/tabview';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { ThreadDetailComponent } from './thread-detail/thread-detail.component';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { threadReducer } from './member/home-member.reducer';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { TimeAgoPipe } from 'src/app/pipe/time-ago.pipe';
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
  ],
  declarations: [HomeMemberComponent, ThreadDetailComponent, TimeAgoPipe],
  exports: [HomeMemberComponent, ThreadDetailComponent],
})
export class HomeMemberModule {}
