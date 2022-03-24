import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contact-us.page';
import { ContactFormComponentModule } from '@messages';
import { FirebaseMessagesServiceModule } from '../../../projects/messages/src/lib/adapters/secondary/infrastructure/firebase-messages.service-module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ContactUsPage,
      },
    ]),
    ContactFormComponentModule,
    FirebaseMessagesServiceModule,
  ],
  declarations: [ContactUsPage],
  providers: [],
  exports: [],
})
export class ContactUsPageModule {}
