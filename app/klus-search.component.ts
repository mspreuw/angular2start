import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { KlusSearchService } from './klus-search.service';
import { Klus } from './klus';

@Component({
  selector: 'klus-search',
  templateUrl: 'app/klus-search.component.html',
  styleUrls:  ['app/klus-search.component.css'],
  providers: [KlusSearchService]
})
export class KlusSearchComponent implements OnInit {
  klussen: Observable<Klus[]>;
  private searchTerms = new Subject<string>();

  constructor(
    private klusSearchService: KlusSearchService,
    private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.klussen = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.klusSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Klus[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Klus[]>([]);
      });
  }

  gotoDetail(klus: Klus): void {
    let link = ['/projecten', klus.id];
    this.router.navigate(link);
  }
}
