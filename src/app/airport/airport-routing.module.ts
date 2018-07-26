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
    path: 'airplane',
    component: AirplaneComponent
  },
  {
    path: 'airplane/:id',
    component: AirplaneDetailsComponent
  },
  {
    path: 'airplanetype',
    component: AirplanetypeComponent
  },
  {
    path: 'airplanetype/:id',
    component: AirplanetypeDetailsComponent
  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'crew/:id',
    component: CrewDetailsComponent
  },
  {
    path: 'departure',
    component: DepartureComponent
  },
  {
    path: 'departure/:id',
    component: DepartureDetailsComponent
  },
  {
    path: 'flight',
    component: FlightComponent
  },
  {
    path: 'flight/:id',
    component: FlightDetailsComponent
  },
  {
    path: 'pilot',
    component: PilotComponent
  },
  {
    path: 'pilot/:id',
    component: PilotDetailsComponent
  },
  {
    path: 'stewardess',
    component: StewardessComponent
  },
  {
    path: 'stewardess/:id',
    component: StewardessDetailsComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
  {
    path: 'ticket/:id',
    component: TicketDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
