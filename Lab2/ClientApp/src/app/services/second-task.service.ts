import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IResultObject } from '../models/common.models';

@Injectable()
export class SecondTaskService {
  constructor(
    private readonly http: HttpClient,
  ) { }

  public convert(unsignedNumber: number): Observable<IResultObject> {
    return this.http.post<IResultObject>('/second-task/convert', JSON.stringify({ unsignedNumber }), {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
}
