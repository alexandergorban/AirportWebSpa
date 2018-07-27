import {Resource} from './resource';
import {Pilot} from './pilot';
import List from 'typescript-dotnet-umd/System/Collections/List';
import {Stewardess} from './stewardess';

export class Crew extends Resource {
  pilot: Pilot;
  stewardesses: List<Stewardess>;
}
