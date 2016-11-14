import { Injectable } from '@angular/core';
import { Klus } from './klus';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class KlusService {

  private klussenUrl = 'app/klussen';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getKlussen(): Promise<Klus[]> {
    return this.http.get(this.klussenUrl)
    .toPromise()
    .then(response => response.json().data as Klus[])
    .catch(this.handleError);
  }
  getKlus(id: number): Promise<Klus> {
    return this.getKlussen()
    .then(klussen => klussen.find(klus => klus.id === id));
  }
  getKlussenSlowly(): Promise<Klus[]> {
    return new Promise<Klus[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getKlussen());
    }
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
    update(klus: Klus): Promise<Klus> {
      const url = `${this.klussenUrl}/${klus.id}`;
      return this.http
      .put(url, JSON.stringify(klus), {headers: this.headers})
      .toPromise()
      .then(() => klus)
      .catch(this.handleError);
    }
    create(name: string): Promise<Klus> {
      return this.http
      .post(this.klussenUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
    }
    delete(id: number): Promise<void> {
  let url = `${this.klussenUrl}/${id}`;
  return this.http.delete(url, {headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
}
  }
