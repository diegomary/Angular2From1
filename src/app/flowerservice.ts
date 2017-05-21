import { Injectable }  from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class FlowerService {
  constructor (
    private http: Http
  ) {}

  getFlowers() {
    return this.http.get(`https://jwt-diegomary.rhcloud.com/api/flowers`)
    .map((res:Response) => res.json());
  }

}
