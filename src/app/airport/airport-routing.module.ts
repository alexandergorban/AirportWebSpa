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
    path: 'airplanetype',
    component: AirplanetypeComponent
  },
  {
    path: 'crew',
    component: CrewComponent
  },
  {
    path: 'departure',
    component: DepartureComponent
  },
  {
    path: 'flight',
    component: FlightComponent
  },
  {
    path: 'pilot',
    component: PilotComponent
  },
  {
    path: 'stewardess',
    component: StewardessComponent
  },
  {
    path: 'ticket',
    component: TicketComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AirportRoutingModule { }
