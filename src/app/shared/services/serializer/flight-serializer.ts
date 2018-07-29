import {Flight} from '../../models/flight';

export class FlightSerializer {
  fromJson(json: any): Flight {
    const flight = new Flight();
    flight.id = json.id;
    flight.flightNumber = json.flightNumber;
    flight.departurePoint = json.departurePoint;
    flight.departureTime = json.departureTime;
    flight.destinationPoing = json.destinationPoing;
    flight.arrivalTime = json.arrivalTime;
    flight.tickets = json.tickets;

    return flight;
  }

  toJson(flight: Flight): any {
    return {
      id: flight.id,
      flightNumber: flight.flightNumber,
      departurePoint: flight.departurePoint,
      departureTime: flight.departureTime,
      destinationPoing: flight.destinationPoing,
      arrivalTime: flight.arrivalTime,
      tickets: flight.tickets,
    };
  }
}
