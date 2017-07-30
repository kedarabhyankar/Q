import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MapgenService {

  constructor(
    private http: Http
  ) {}

  generateMap(){
    let headers = new Headers();
    headers.append('Content-Type','application/json');
    return this.http.get('http://10.10.20.58/', { headers: headers })
      .map(res => res.json());
  }

}
