import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgforgroupbyComponent } from './ngforgroupby/ngforgroupby.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgclassComponent } from './ngclasss/ngclasss.component';
// import { TwowaydataComponent } from './twowaydata/twowaydata.component';
import { StudComponent } from './pipe/stud.component';
import { SquarePipe } from './pipe/stud.pipe';
import { pipe2Component } from './pipe2/pipe2.component';
import { Mypipepipe } from './pipe3/mypipe.pipe';
import { Pipe3Component } from './pipe3/pipe3.component';
import { ReactComponent } from './reactform/reactform.component';
import { FormpgrpComponent } from './formgrp/formgrp.component';

@NgModule({
  declarations: [
    AppComponent,
   
    NgforgroupbyComponent,
    NgstyleComponent,
    NgclassComponent,
    // TwowaydataComponent,
    StudComponent,
    SquarePipe,
    pipe2Component,
    Mypipepipe,
    Pipe3Component,
    ReactComponent,
    FormpgrpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

     
 }
