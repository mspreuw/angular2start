import { Klus } from './klus';
// Keep the Input import for now, we'll remove it later:
import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProjectenEmptyComponent } from './projecten-empty.component';


@Component({
  selector: 'my-projecten-detail',
  styleUrls: ['app/projecten-detail.component.css'],
  template: `
  <div>
    <div>
      <my-projecten-empty></my-projecten-empty>
      Voorlopige tekst
    </div>
  </div>
  `
})
export class ProjectenDetailComponent {
  constructor(
    private route: ActivatedRoute) {
    }

    klus: Klus;

  getID1Html(){
    return ` <div> test1
    very
    long
    html
     </div>`;

  }

    getProjectenDetail(id:number):string{
      if(id == 1)
        return this.getID1Html();
      if(id == 2)
        return ` <div> test2 </div>`
      if(id == 3)
        return ` <div> test3 </div>`
      if(id == 4)
        return ` <div> test4 </div>`
      return ` <div> test iets anders </div>`;
    }
}
//   goBack(): void {
//      window.history.back();
//    }
