import {Pilot} from '../../models/pilot';

export class PilotSerializer {
  fromJson(json: any): Pilot {
    const pilot = new Pilot();
    pilot.id = json.id;
    pilot.name = json.name;
    pilot.surname = json.surname;
    pilot.dateOfBirth = json.dateOfBirth;
    pilot.experience = json.experience;

    return pilot;
  }

  toJson(pilot: Pilot): any {
    return {
      id: pilot.id,
      name: pilot.name,
      surname: pilot.surname,
      dateOfBirth: pilot.dateOfBirth,
      experience: pilot.experience
    };
  }
}
