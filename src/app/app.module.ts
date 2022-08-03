import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CustomInterceptor } from './interceptor/CustomInterceptor';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRouting,
    
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS, useClass:CustomInterceptor, multi:true},
    MessageService,
  ],
  schemas: [
      CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
