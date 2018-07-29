import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {AirplaneComponent} from './airplane/airplane.component';
import {AirplanetypeComponent} from './airplanetype/airplanetype.component';
import {CrewComponent} from './crew/crew.component';
import {DepartureComponent} from './departure/departure.component';
import {FlightComponent} from './flight/flight.component';
import {PilotComponent} from './pilot/pilot.component';
import {StewardessComponent} from './stewardess/stewardess.component';
import {TicketComponent} from './ticket/ticket.component';
import {AirplaneDetailsComponent} from './airplane/airplane-details/airplane-details.component';
import {AirplanetypeDetailsComponent} from './airplanetype/airplanetype-details/airplanetype-details.component';
import {CrewDetailsComponent} from './crew/crew-details/crew-details.component';
import {DepartureDetailsComponent} from './departure/departure-details/departure-details.component';
import {FlightDetailsComponent} from './flight/flight-details/flight-details.component';
import {PilotDetailsComponent} from './pilot/pilot-details/pilot-details.component';
import {StewardessDetailsComponent} from './stewardess/stewardess-details/stewardess-details.component';
import {TicketDetailsComponent} from './ticket/ticket-details/ticket-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main',
    pathMatch: 'full'
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'airplanes',
    component: AirplaneComponent
  },
  {
    path: 'airplanes/:id',
    component: AirplaneDetailsComponent
  },
  {
    path: 'airplanetypes',
    component: AirplanetypeComponent
  },
  {
    path: 'airplanetypes/:id',
    component: AirplanetypeDetailsComponent
  },
  {
    path: 'crews',
    component: CrewComponent
  },
  {
    path: 'crews/:id',
    component: CrewDetailsComponent
  },
  {
    path: 'departures',
    component: DepartureComponent
  },
  {
    path: 'departures/:id',
    component: DepartureDetailsComponent
  },
  {
    path: 'flights',
    component: FlightComponent
  },
  {
    path: 'flights/:id',
    component: FlightDetailsComponent
  },
  {
    path: 'pilots',
    component: PilotComponent
  },
  {
    path: 'pilots/:id',
    component: PilotDetailsComponent
  },
  {
    path: 'stewardesses',
    component: StewardessComponent
  },
  {
    path: 'stewardesses/:id',
    component: StewardessDetailsComponent
  },
  {
    path: 'tickets',
    component: TicketComponent
  },
  {
    path: 'tickets/:id',
    component: TicketDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
