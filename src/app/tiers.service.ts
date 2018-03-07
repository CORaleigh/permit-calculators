
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tier } from './tier';
@Injectable()
export class TiersService {
  constructor(private http: HttpClient) { }
  getTiers(){
    return this.http.get('./assets/tiers.json');
  }
}