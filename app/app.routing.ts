import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectenComponent} from './projecten.component';
import { KlussenComponent } from './klussen.component';
import { ProjectenDetailComponent } from './projecten-detail.component';
import { WaaromComponent } from './waarom.component';
import { WieZijnWeComponent } from './wiezijnwe.component';
import { HoeWerkenWeComponent }      from './hoewerkenwe.component';
import { ContactComponent } from './contact.component';


const appRoutes: Routes = [

  {
  path: 'wiezijnwe',
  component: WieZijnWeComponent
},
{
  path: 'waarom',
  component: WaaromComponent
},
{
  path: 'hoewerkenwe',
  component: HoeWerkenWeComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'projecten',
  component: ProjectenComponent
},
{
  path: '',
  redirectTo: '/wiezijnwe',
  pathMatch: 'full'
},
{
  path: 'projecten/:id',
  component: ProjectenDetailComponent
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
