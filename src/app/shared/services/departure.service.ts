import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {Departure} from '../models/departure';
import {DepartureSerializer} from './serializer/departure-serializer';

@Injectable()
export class DepartureService extends ResourceService<Departure>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'departures',
      new DepartureSerializer())
  }
}
