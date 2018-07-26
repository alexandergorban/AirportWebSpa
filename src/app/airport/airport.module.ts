import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule,
  MatIconModule, MatListModule, MatGridListModule,
  MatCardModule, MatMenuModule } from '@angular/material';
import { MainComponent } from './main/main.component';
import { AirplaneComponent } from './airplane/airplane.component';
import { AirplanetypeComponent } from './airplanetype/airplanetype.component';
import { CrewComponent } from './crew/crew.component';
import { DepartureComponent } from './departure/departure.component';
import { FlightComponent } from './flight/flight.component';
import { PilotComponent } from './pilot/pilot.component';
import { StewardessComponent } from './stewardess/stewardess.component';
import { TicketComponent } from './ticket/ticket.component';
import { TicketDetailsComponent } from './ticket/ticket-details/ticket-details.component';
import { StewardessDetailsComponent } from './stewardess/stewardess-details/stewardess-details.component';
import { PilotDetailsComponent } from './pilot/pilot-details/pilot-details.component';
import { FlightDetailsComponent } from './flight/flight-details/flight-details.component';
import { DepartureDetailsComponent } from './departure/departure-details/departure-details.component';
import { CrewDetailsComponent } from './crew/crew-details/crew-details.component';
import { AirplanetypeDetailsComponent } from './airplanetype/airplanetype-details/airplanetype-details.component';
import { AirplaneDetailsComponent } from './airplane/airplane-details/airplane-details.component';

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
  declarations: [
    MainComponent,
    AirplaneComponent,
    AirplanetypeComponent,
    CrewComponent,
    DepartureComponent,
    FlightComponent,
    PilotComponent,
    StewardessComponent,
    TicketComponent,
    TicketDetailsComponent,
    StewardessDetailsComponent,
    PilotDetailsComponent,
    FlightDetailsComponent,
    DepartureDetailsComponent,
    CrewDetailsComponent,
    AirplanetypeDetailsComponent,
    AirplaneDetailsComponent
  ]
})
export class AirportModule { }
