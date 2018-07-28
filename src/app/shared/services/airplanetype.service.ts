import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AirplaneType} from '../models/airplanetype';
import {ResourceService} from './base/resource.service';
import {AirplaneTypeSerializer} from '../models/serializer/airplanetype-serializer';

@Injectable()
export class AirplanetypeService extends ResourceService<AirplaneType>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'airplanetypes',
      new AirplaneTypeSerializer())
  }
}
