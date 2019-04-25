import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RightofwayService {
  constructor(private http: HttpClient) { }
  getRightofway(){
    return this.http.get('./assets/rightofway.json');
  }
}
