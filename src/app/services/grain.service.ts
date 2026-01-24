import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grain } from '../classes/grain';
import { DataService } from './data-service';

@Injectable({
  providedIn: 'root',
})
export class GrainService extends DataService {


  constructor(httpClient: HttpClient) {
    super('http://localhost:8080/grain', httpClient);
  }

  saveGrain(operation: string, grain: Grain): Observable<any> {
    if (operation === 'post') {
      return this.create(grain);
    } else {
      return this.update(grain.id, grain);
    }
  }






}
``