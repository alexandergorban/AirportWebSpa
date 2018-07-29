import {AirplaneType} from '../../models/airplanetype';

export class AirplaneTypeSerializer {
  fromJson(json: any): AirplaneType {
    const airplaneType = new AirplaneType();
    airplaneType.id = json.id;
    airplaneType.model = json.model;
    airplaneType.numberOfSeats = json.numberOfSeats;
    airplaneType.loadCapacity = json.loadCapacity;

    return airplaneType;
  }

  toJson(airplaneType: AirplaneType): any {
    return {
      id: airplaneType.id,
      model: airplaneType.model,
      numberOfSeats: airplaneType.numberOfSeats,
      loadCapacity: airplaneType.loadCapacity
    };
  }
}
