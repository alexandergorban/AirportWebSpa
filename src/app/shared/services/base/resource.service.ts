import {Resource} from '../../models/resource';
import {HttpClient} from '@angular/common/http';
import {Serializer} from '../../interfaces/serializer';
import {Observable} from 'rxjs';
import {QueryOptions} from './query-options';
import {map} from 'rxjs/operators';


export class ResourceService<T extends Resource> {
  constructor(
    private httpClient: HttpClient,
    private url: string,
    private endpoint: string,
    private serializer: Serializer) {}

  public create(item: T): Observable<T> {
    return this.httpClient
      .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  public update(item: T): Observable<T> {
    return this.httpClient
      .put<T>(`${this.url}/${this.endpoint}/${item.id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as T));
  }

  read(id: string): Observable<T> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as T));
  }

  listQuery(queryOptions: QueryOptions): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  list(): Observable<T[]> {
    return this.httpClient
      .get(`${this.url}/${this.endpoint}`)
      .pipe(map((data: any) => this.convertData(data)));
  }

  delete(id: string) {
    return this.httpClient
      .delete(`${this.url}/${this.endpoint}/${id}`);
  }

  private convertData(data: any): T[] {
    return data.map(item => this.serializer.fromJson(item));
  }
}
