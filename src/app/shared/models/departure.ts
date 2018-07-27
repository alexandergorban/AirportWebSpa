import {Resource} from './resource';
import {Flight} from './flight';
import {Crew} from './crew';
import {Airplane} from './airplane';

export class Departure extends Resource {
  departureTime: Date;
  isFlightDelay: boolean;
  departureTimeChanged: Date;
  flight: Flight;
  crew: Crew;
  airplane: Airplane;
}
