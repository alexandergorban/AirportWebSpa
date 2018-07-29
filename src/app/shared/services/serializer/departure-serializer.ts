import {Departure} from '../../models/departure';

export class DepartureSerializer {
  fromJson(json: any): Departure {
    const departure = new Departure();
    departure.id = json.id;
    departure.departureTime = json.departureTime;
    departure.isFlightDelay = json.isFlightDelay;
    departure.departureTimeChanged = json.departureTimeChanged;
    departure.flight = json.flight;
    departure.crew = json.crew;
    departure.airplane = json.airplane;

    return departure;
  }

  toJson(departure: Departure): any {
    return {
      id: departure.id,
      departureTime: departure.departureTime,
      isFlightDelay: departure.isFlightDelay,
      flight: departure.flight,
      airplane: departure.airplane,
    };
  }
}
