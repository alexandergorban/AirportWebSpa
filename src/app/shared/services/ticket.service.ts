import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {Ticket} from '../models/ticket';
import {TicketSerializer} from './serializer/ticket-serializer';

@Injectable()
export class TicketService extends ResourceService<Ticket>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'tickets',
      new TicketSerializer())
  }
}
