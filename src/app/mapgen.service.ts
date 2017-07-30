import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MapgenService {

  constructor(
    private http: Http
  ) {}

}
