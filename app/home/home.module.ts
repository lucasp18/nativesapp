import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

@NgModule({
  imports: [
    NativeScriptModule,
    HomeRoutingModule,
    TNSFontIconModule.forRoot({ 
      'mdi':'material-design-icons.css'})
  ],
  declarations: [
    HomeComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class HomeModule { }
