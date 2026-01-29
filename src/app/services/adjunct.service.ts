import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Observable } from 'rxjs';
import { Adjunct } from '../classes/adjunct';


@Injectable({
  providedIn: 'root',
})
export class AdjunctService extends DataService {


  // add adjunct url and delegate all methods to super class
  constructor(httpClient: HttpClient) {
    super('http://localhost:8080/adjunct', httpClient);
  }

  saveAdjunct(operation: string, adjunct: Adjunct): Observable<any> {
    if (operation === 'post') {
      return this.create(adjunct);
    } else {
      return this.update(adjunct.id, adjunct);
    }
  }

}
