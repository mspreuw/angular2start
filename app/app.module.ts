import './rxjs-extensions';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { KlussenComponent }      from './klussen.component';
import { ProjectenDetailComponent }  from './projecten-detail.component';
import { KlusService }          from './klus.service';
import { routing }              from './app.routing';
import { KlusSearchComponent }  from './klus-search.component';
import { WaaromComponent }      from './waarom.component';
import { WieZijnWeComponent }      from './wiezijnwe.component';
import { HoeWerkenWeComponent }      from './hoewerkenwe.component';
import { MyFooterComponent } from './myfooter.component';
import { ContactComponent } from './contact.component';
import { ProjectenComponent } from './projecten.component';
import { ProjectenEmptyComponent }  from './projecten-empty.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    routing
  ],
  declarations: [
    AppComponent,
    ProjectenComponent,
    ProjectenDetailComponent,
    ProjectenEmptyComponent,
    KlussenComponent,
    KlusSearchComponent,
    WaaromComponent,
    WieZijnWeComponent,
    HoeWerkenWeComponent,
    MyFooterComponent,
    ContactComponent,
  ],
  providers: [
    KlusService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
