import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {Stewardess} from '../models/stewardess';
import {StewardessSerializer} from './serializer/stewardess-serializer';

@Injectable()
export class StewardessService extends ResourceService<Stewardess>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'crews/stewardesses',
      new StewardessSerializer())
  }
}
