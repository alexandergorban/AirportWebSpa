import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResourceService} from './base/resource.service';
import {Flight} from '../models/flight';
import {FlightSerializer} from './serializer/flight-serializer';

@Injectable()
export class FlightService extends ResourceService<Flight>{
  constructor(httpClient: HttpClient) {
    super(httpClient,
      'http://localhost:32157/api/v1',
      'flights',
      new FlightSerializer())
  }
}
