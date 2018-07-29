import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {CrewSerializer} from './serializer/crew-serializer';
import {Crew} from '../models/crew';

@Injectable()
export class CrewService extends ResourceService<Crew>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'crews',
      new CrewSerializer())
  }
}
