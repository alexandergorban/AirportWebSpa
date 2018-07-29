import {Resource} from './resource';
import {AirplaneType} from './airplanetype';

export class Airplane extends Resource {
  name: string;
  airplaneType: AirplaneType;
  dateOfIssue: Date;
  lifeTime: any;
  isOwnAirplane: boolean;
}
