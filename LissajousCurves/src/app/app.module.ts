import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule} from '@angular/forms';

import { MatSliderModule, MatSlideToggleModule, MatTooltipModule } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewComponent } from './view/view.component';
import { SliderComponent } from './slider/slider.component';
import { SliderToggleComponent } from './slider-toggle/slider-toggle.component';
import { LissajousChartComponent } from './lissajous-chart/lissajous-chart.component';

import 'hammerjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatTooltipModule,
    FormsModule,
    MatExpansionModule,
    MatTabsModule,
    MatGridListModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    SliderComponent,
    SliderToggleComponent,
    LissajousChartComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
