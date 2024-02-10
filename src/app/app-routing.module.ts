import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortComponent } from './port/port.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{path:'about',component:AboutComponent,title:"about"},
{path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:HomeComponent,title:"home"},
{path:'contact',component:ContactComponent,title:"contact"},
{path:'port',component:PortComponent,title:"PORT"},
{path:'**',component:NotfoundComponent,title:"NotFound"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
