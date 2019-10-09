import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IResultObject } from '../models/common.models';

@Injectable()
export class FirstTaskService {
  constructor(
    private readonly http: HttpClient,
  ) { }

  public countSqrtN(data: { targetNumber: number, degree: number }): Observable<IResultObject> {
    return this.http.post<IResultObject>('/first-task/sqrtn', JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }

  public countSqrtPow(data: { targetNumber: number, degree: number }): Observable<IResultObject> {
    return this.http.post<IResultObject>('/first-task/sqrtpow', JSON.stringify(data), {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    });
  }
}
