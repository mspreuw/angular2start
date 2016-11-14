import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Klus }           from './klus';

@Injectable()
export class KlusSearchService {

  constructor(private http: Http) {}

  search(term: string): Observable<Klus[]> {
    return this.http
               .get(`app/klussen/?name=${term}`)
               .map((r: Response) => r.json().data as Klus[]);
  }
}
