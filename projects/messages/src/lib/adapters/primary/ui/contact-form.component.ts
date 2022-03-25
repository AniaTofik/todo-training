import { FormGroup, FormControl } from '@angular/forms';
import {
  Component,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import {
  ADDS_MESSAGE_DTO,
  AddsMessageDtoPort,
} from '../../../application/ports/secondary/adds-message.dto-port';

@Component({
  selector: 'lib-contact-form',
  templateUrl: './contact-form.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  readonly messagesForm: FormGroup = new FormGroup({
    email: new FormControl(),
    text: new FormControl(),
  });

  constructor(
    @Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort
  ) {}

  onMessagesFormAddeventlistenered(messagesForm: FormGroup): void {
    if (messagesForm.invalid) {
      return;
    }
    this._addsMessageDto.add(messagesForm.getRawValue());
    console.log(messagesForm.getRawValue()),
      alert(
        `email:${messagesForm.value.email}, text:${messagesForm.value.text}`
      );
    messagesForm.reset();
  }
}
