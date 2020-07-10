import { OrdiniComponent } from './ordini/ordini.component';
import { ProfiloComponent } from './profilo/profilo.component';
import { ChildAComponent } from './child-a/child-a.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ChildBComponent } from './child-b/child-b.component';


const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'profilo', component: ProfiloComponent, children:[
    { path: 'child-a', component: ChildAComponent },
    { path: 'child-b', component: ChildBComponent }
  ]},
  { path: 'ordini', component: OrdiniComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomepageComponent },
  { path: '**', component: ProfiloComponent },
  { path: '**', component: OrdiniComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
