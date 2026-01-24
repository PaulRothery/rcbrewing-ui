import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { map } from 'rxjs/operators';
import { BadInput } from '../common/bad-input';
import { Grain } from '../classes/grain';



@Injectable({
  providedIn: 'root',
})

export class DataService {

  public onError: Subject<string> = new Subject();

  constructor(
    @Inject(String) private url: string,
    private httpClient: HttpClient
  ) { }

  httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.url);
  }

  create(resource: any) {

    return this.httpClient.post(this.url, JSON.stringify(resource), this.httpHeader)
      .pipe(
        map((response) => response),
        catchError(this.handlError)
      );
  }

  getById(resource: string) {
    return this.httpClient.get<any[]>(this.url + '/' + resource);
  }

  update(id: string, resource: any) {
    return this.httpClient
      .put(this.url + '/' + id, JSON.stringify(resource), this.httpHeader)
      .pipe(
        map((response) => response),
        catchError(this.handlError)
      );
  }


  delete(id: any): Observable<any[]> {
    console.log('deleting ' + this.url + '/' + id);
    return this.httpClient.delete<any[]>(this.url + '/' + id);
  }

  private handlError(error: { status: number }) {

    console.log('error ' + error);
    if (error.status === 400) {
      return throwError(new BadInput(error));
    }

    if (error.status === 404) {
      return throwError(new NotFoundError());
    }

    return throwError(new AppError(error));
  }


}
