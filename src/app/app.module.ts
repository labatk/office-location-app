import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SortablejsModule } from 'ngx-sortablejs';

import { AppComponent } from './app.component';
import { AppLocationsComponent } from './app-locations.component';

@NgModule({
  declarations: [AppComponent, AppLocationsComponent],
  imports: [BrowserModule, SortablejsModule.forRoot({ animation: 150 })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
