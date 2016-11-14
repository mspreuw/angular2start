import { Component} from '@angular/core';

@Component({
  selector: 'my-footer',
  template:`
  <div class="footerano">
  {{footerke}}
  </div>
  `,
  styleUrls: ['app/projecten.component.css']
})

export class MyFooterComponent {
  footerke = 'a bit of footer information'
}
