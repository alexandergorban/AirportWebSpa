import {Stewardess} from '../../models/stewardess';

export class StewardessSerializer {
  fromJson(json: any): Stewardess {
    const stewardess = new Stewardess();
    stewardess.id = json.id;
    stewardess.name = json.name;
    stewardess.surname = json.surname;
    stewardess.dateOfBirth = json.dateOfBirth;

    return stewardess;
  }

  toJson(stewardess: Stewardess): any {
    return {
      id: stewardess.id,
      name: stewardess.name,
      surname: stewardess.surname,
      dateOfBirth: stewardess.dateOfBirth,
    };
  }
}

