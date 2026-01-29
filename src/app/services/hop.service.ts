import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Observable } from 'rxjs';
import { Hop } from '../classes/hop';


@Injectable({
  providedIn: 'root',
})
export class HopService extends DataService {


  // add hop url and delegate all methods to super class
  constructor(httpClient: HttpClient) {
    super('http://localhost:8080/hop', httpClient);
  }

  saveHop(operation: string, hop: Hop): Observable<any> {
    if (operation === 'post') {
      return this.create(hop);
    } else {
      return this.update(hop.id, hop);
    }
  }

}
