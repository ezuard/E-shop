import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstpageComponent } from './firstpage/firstpage.component';
import { SecondpageComponent } from './secondpage/secondpage.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProfiloComponent } from './profilo/profilo.component';
import { OrdiniComponent } from './ordini/ordini.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    SecondpageComponent,
    HomepageComponent,
    ChildAComponent,
    ChildBComponent,
    ProfiloComponent,
    OrdiniComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
