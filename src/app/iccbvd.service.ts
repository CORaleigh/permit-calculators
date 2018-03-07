import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Iccbvd } from './iccbvd';
@Injectable()
export class IccbvdService {
  constructor(private http: HttpClient) { }
  getIccBvd(){
    return this.http.get('./assets/iccbvd.json');
  }
}