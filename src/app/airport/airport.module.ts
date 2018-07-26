import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirportRoutingModule } from './airport-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AirportRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [NavbarComponent]
})
export class AirportModule { }
