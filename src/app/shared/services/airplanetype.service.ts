import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AirplaneType} from '../models/airplanetype';
import {Observable} from 'rxjs';

@Injectable()
export class AirplanetypeService {

  private url='http://pizzaService';
  private endpoint = 'pizzas';

  constructor(protected httpClient: HttpClient) {

  }

  public create(airplaneType: AirplaneType): Observable<AirplaneType> {
    return this.httpClient
      .post<AirplaneType>(`${this.url}/${this.endpoint}`, airplaneType);
  }

  public update(airplaneType: AirplaneType): Observable<AirplaneType> {
    return this.httpClient
      .put<AirplaneType>(`${this.url}/${this.endpoint}/${airplaneType.id}`, airplaneType);
  }

  read(id: number): Observable<AirplaneType> {
    return this.httpClient
      .get<AirplaneType>(`${this.url}/${this.endpoint}/${id}`);
  }

  list(): Observable<AirplaneType[]> {
    return this.httpClient
      .get<AirplaneType[]>(`${this.url}/${this.endpoint}`);
  }

  delete(id: number) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }
}
