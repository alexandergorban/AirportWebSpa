import {Resource} from './resource';
import {AirportLocation} from './airportlocation';
import {Ticket} from './ticket';
import List from 'typescript-dotnet-umd/System/Collections/List';

export class Flight extends Resource {
  flightNumber: number;
  departurePoint: AirportLocation;
  departureTime: Date;
  destinationPoing: AirportLocation;
  arrivalTime: Date;
  tickets: Ticket[]
}
