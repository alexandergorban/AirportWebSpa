import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AirplaneService} from './airplane.service';
import {AirplanetypeService} from './airplanetype.service';
import {CrewService} from './crew.service';
import {DepartureService} from './departure.service';
import {FlightService} from './flight.service';
import {PilotService} from './pilot.service';
import {StewardessService} from './stewardess.service';
import {TicketService} from './ticket.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AirplaneService,
    AirplanetypeService,
    CrewService,
    DepartureService,
    FlightService,
    PilotService,
    StewardessService,
    TicketService
  ]
})
export class ServicesModule {

}
