import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RedComponent } from './red/red.component';
import { BlueComponent } from './blue/blue.component';
import {ColorService} from './color.service';
import { PointComponent } from './point/point.component';
import { ControlComponent } from './control/control.component';
import {PointService} from './point.service';
import {PointDataService} from './point-data.service';

@NgModule({
  declarations: [
    AppComponent,
    RedComponent,
    BlueComponent,
    PointComponent,
    ControlComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ColorService,PointService,PointDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
