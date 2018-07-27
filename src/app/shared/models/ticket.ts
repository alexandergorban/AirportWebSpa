import {Resource} from './resource';

export class Ticket extends Resource {
  number: number;
  price: number;
  flightId: string;
}
