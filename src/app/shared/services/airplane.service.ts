import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {AirplaneSerializer} from '../models/serializer/airplane-serializer';
import {Airplane} from '../models/airplane';

@Injectable()
export class AirplaneService extends ResourceService<Airplane>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'airplanes',
      new AirplaneSerializer())
  }
}
