import {Ticket} from '../../models/ticket';

export class TicketSerializer {
  fromJson(json: any): Ticket {
    const ticket = new Ticket();
    ticket.id = json.id;
    ticket.number = json.number;
    ticket.price = json.price;
    ticket.flightId = json.flightId;

    return ticket;
  }

  toJson(ticket: Ticket): any {
    return {
      id: ticket.id,
      number: ticket.number,
      price: ticket.price,
      flightId: ticket.flightId,
    };
  }
}
