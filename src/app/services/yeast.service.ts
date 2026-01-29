import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataService } from './data-service';
import { Observable } from 'rxjs';
import { Yeast } from '../classes/yeast';


@Injectable({
  providedIn: 'root',
})
export class YeastService extends DataService {


  // add yeast url and delegate all methods to super class
  constructor(httpClient: HttpClient) {
    super('http://localhost:8080/yeast', httpClient);
  }


  saveYeast(operation: string, yeast: Yeast): Observable<any> {
    if (operation === 'post') {
      return this.create(yeast);
    } else {
      return this.update(yeast.id, yeast);
    }
  }
}
