import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module';


@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    ChatRoutingModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    }),
  ],
  declarations: [
    ChatComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: []
})
export class ChatModule { }
