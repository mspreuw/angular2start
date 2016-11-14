import { Component } from '@angular/core';
import { Klus } from './klus';
import { KlusService } from './klus.service';
import { Router } from '@angular/router';
import { ProjectenDetailComponent} from './projecten-detail.component';
import { ProjectenEmptyComponent} from './projecten-empty.component';

@Component({
  selector: 'my-projecten',
  templateUrl: 'app/projecten.component.html',
})

export class ProjectenComponent {

  constructor(
    private router: Router,
    private klusService: KlusService) {
  }

  gotoDetail(klus: Klus): void {
    let link = ['/projecten', klus.id];
    this.router.navigate(link);
  }
}
