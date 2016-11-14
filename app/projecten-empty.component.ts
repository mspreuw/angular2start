import { Klus } from './klus';
// Keep the Input import for now, we'll remove it later:
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'my-projecten-empty',
  templateUrl: 'app/projecten-empty.component.html',
  styleUrls: ['app/projecten-empty.component.css'],
})
export class ProjectenEmptyComponent {
  constructor(
    private route: ActivatedRoute) {
    }

      klussen: Klus[] = [];

}
//   goBack(): void {
//      window.history.back();
//    }
