import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { MainComponent } from './main/main.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { AirplanetypeComponent } from './airplanetype/airplanetype.component';
import { CrewComponent } from './crew/crew.component';
import { DepartureComponent } from './departure/departure.component';
import { FlightComponent } from './flight/flight.component';
import { PilotComponent } from './pilot/pilot.component';
import { StewardessComponent } from './stewardess/stewardess.component';

@NgModule({
  imports: [
    CommonModule,
    AirportRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  declarations: [NavbarComponent, MainComponent, AirplaneComponent, AirplanetypeComponent, CrewComponent, DepartureComponent, FlightComponent, PilotComponent, StewardessComponent]
})
export class AirportModule { }
