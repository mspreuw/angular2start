import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    template: `
      <h1>{{title}}</h1>
      <nav>
        <a routerLink="/wiezijnwe" routerLinkActive="active">Wie zijn we</a>
        <a routerLink="/waarom" routerLinkActive="active">Waarom</a>
        <a routerLink="/hoewerkenwe" routerLinkActive="active">Hoe werken we</a>
        <a routerLink="/projecten" routerLinkActive="active">Projecten</a>
        <a routerLink="/contact" routerLinkActive="active">Contact</a>
      </nav>
      <router-outlet></router-outlet>
    `,
    styleUrls: ['app/app.component.css'],
})
export class AppComponent {
    title = 'Arboklus banner should come here';
}
