import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule } from '@angular/material';
import { AirportModule } from './airport/airport.module';
import { NavbarComponent } from './airport/navbar/navbar.component';
import {ServicesModule} from './shared/services/services.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServicesModule,
    AirportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
