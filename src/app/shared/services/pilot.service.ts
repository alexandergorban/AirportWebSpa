import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {Pilot} from '../models/pilot';
import {PilotSerializer} from '../models/serializer/pilot-serializer';

@Injectable()
export class PilotService extends ResourceService<Pilot>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'pilots',
      new PilotSerializer())
  }
}
