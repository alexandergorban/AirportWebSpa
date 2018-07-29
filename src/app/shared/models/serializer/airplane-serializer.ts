import {Airplane} from '../airplane';

export class AirplaneSerializer {
  fromJson(json: any): Airplane {
    const airplane = new Airplane();
    airplane.id = json.id;
    airplane.airplaneType = json.airplaneType;
    airplane.dateOfIssue = json.dateOfIssue;
    airplane.lifeTime = json.lifeTime;
    airplane.isOwnAirplane = json.isOwnAirplane;

    return airplane;
  }

  toJson(airplane: Airplane): any {
    return {
      id: airplane.id,
      airplaneType: airplane.airplaneType,
      dateOfIssue: airplane.dateOfIssue,
      lifeTime: airplane.lifeTime,
      isOwnAirplane: airplane.isOwnAirplane,
    };
  }
}
