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
import { Observable } from 'rxjs';
import { MessageDTO } from '../../../application/ports/secondary/message.dto';
import {
  GETS_ALL_MESSAGE_DTO,
  GetsAllMessageDtoPort,
} from '../../../application/ports/secondary/gets-all-message.dto-port';

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
  messages$: Observable<MessageDTO[]> = this._getsAllMessageDto.getAll();
  // onFormSubmited(messagesForm: FormGroup): void {
  //   console.log(messagesForm.getRawValue());
  //   alert(`text:${messagesForm.value.email}, email:${messagesForm.value.text}`);
  // }
  constructor(
    @Inject(ADDS_MESSAGE_DTO) private _addsMessageDto: AddsMessageDtoPort,
    @Inject(GETS_ALL_MESSAGE_DTO)
    private _getsAllMessageDto: GetsAllMessageDtoPort
  ) {}

  onMessagesFormAddeventlistenered(messagesForm: FormGroup): void {
    // this._addsMessageDto.add(messagesForm.getRawValue())({
    //   console.log(messagesForm.getRawValue()),
    //   alert(`text:${messagesForm.value.email}, email:${messagesForm.value.text}`),
    // });
  }
}
