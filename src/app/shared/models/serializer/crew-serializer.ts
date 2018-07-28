import {Crew} from '../crew';

export class CrewSerializer {
  fromJson(json: any): Crew {
    const crew = new Crew();
    crew.id = json.id;
    crew.pilot = json.pilot;
    crew.stewardesses = json.stewardesses;

    return crew;
  }

  toJson(crew: Crew): any {
    return {
      id: crew.id,
      pilot: crew.pilot,
      stewardesses: crew.stewardesses,
    };
  }
}
