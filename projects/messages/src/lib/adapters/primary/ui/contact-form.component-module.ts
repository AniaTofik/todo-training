import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from './contact-form.component';

@NgModule({ imports: [CommonModule, RouterModule],
  	declarations: [ContactFormComponent],
  	providers: [],
  	exports: [ContactFormComponent] })
export class ContactFormComponentModule {
}
