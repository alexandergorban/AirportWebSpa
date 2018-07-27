import {Resource} from './resource';
import {AirplaneType} from './airplanetype';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Airplane extends Resource {
  name: string;
  airplaneType: AirplaneType;
  dateOfIssue: Date;
  lifeTime: TimeSpan;
  isOwnAirplane: boolean;
}
