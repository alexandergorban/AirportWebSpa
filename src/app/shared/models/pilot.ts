import {Resource} from './resource';
import TimeSpan from 'typescript-dotnet-umd/System/Time/TimeSpan';

export class Pilot extends Resource {
  name: string;
  surname: string;
  dateOfBirth: Date;
  experience: TimeSpan;
}
