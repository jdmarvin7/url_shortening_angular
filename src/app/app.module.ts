import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ShortenLinkUiComponent } from './shorten-link-ui/shorten-link-ui.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { CardModelComponent } from './card-model/card-model.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainHomeComponent,
    ShortenLinkUiComponent,
    StatisticsComponent,
    CardModelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
