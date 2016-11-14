import { Component, OnInit } from '@angular/core';
import { Klus } from './klus';
import { KlusService } from './klus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-klussen',
  templateUrl: 'app/klussen.component.html',
  styleUrls:  ['app/klussen.component.css']
})

export class KlussenComponent implements OnInit {
  klussen: Klus[];
  selectedKlus: Klus;

  constructor(
    private router: Router,
    private klusService: KlusService) { }

  getKlussen(): void {
    this.klusService.getKlussen().then(klussen => this.klussen = klussen);
  }

  ngOnInit(): void {
    this.getKlussen();
  }

  onSelect(klus: Klus): void {
    this.selectedKlus = klus;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedKlus.id]);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.klusService.create(name)
    .then(klus => {
      this.klussen.push(klus);
      this.selectedKlus = null;
    });
  }
  delete(klus: Klus): void {
  this.klusService
      .delete(klus.id)
      .then(() => {
        this.klussen = this.klussen.filter(h => h !== klus);
        if (this.selectedKlus === klus) { this.selectedKlus = null; }
      });
}
}
