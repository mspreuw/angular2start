import { Component, OnInit } from '@angular/core';
import { Klus } from './klus';
import { KlusService } from './klus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-contact',
  templateUrl: 'app/contact.component.html',
  styleUrls: ['app/contact.component.css']
})

export class ContactComponent implements OnInit {

  klussen: Klus[] = [];

  constructor(
    private router: Router,
    private klusService: KlusService) {
  }

  ngOnInit(): void {
    this.klusService.getKlussen()
      .then(klussen => this.klussen = klussen.slice(1, 3));
  }

  gotoDetail(klus: Klus): void {
    let link = ['/projecten', klus.id];
    this.router.navigate(link);
  }
}
