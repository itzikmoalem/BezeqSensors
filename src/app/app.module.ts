import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { homePageComponent } from './components/homePage/homePage.component';
import { sensorComponent } from './components/sensor/sensor.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import { ListfilterPipe } from './pipes/listfilter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    homePageComponent,
    sensorComponent, 
    ListfilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
