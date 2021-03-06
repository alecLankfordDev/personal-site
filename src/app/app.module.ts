import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { DemosComponent } from './demos/demos.component';

@NgModule({
  declarations: [				
    AppComponent,
      ActionBarComponent,
      HomeComponent,
      HomeContentComponent,
      DemosComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
