import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AddsMessageDtoPort } from '../../../application/ports/secondary/adds-message.dto-port';
import { MessageDTO } from '../../../application/ports/secondary/message.dto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { filterByCriterion } from '@lowgular/shared';

@Injectable()
export class FirebaseMessagesService implements AddsMessageDtoPort {
  constructor(private _client: AngularFirestore) {
  }

  add(message: Partial<MessageDTO>): void {
    this._client.collection('messages').add(message);
  }
}
