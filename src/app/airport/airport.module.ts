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
  declarations: [NavbarComponent, MainComponent, AirplaneComponent, AirplanetypeComponent, CrewComponent]
})
export class AirportModule { }
