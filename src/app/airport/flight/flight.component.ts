import {Component, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FlightService} from '../../shared/services/flight.service';
import {Flight} from '../../shared/models/flight';

@Component({
  selector: 'flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.less'],
})
export class FlightComponent implements OnInit {
  flights: Flight[];

  constructor(private breakpointObserver: BreakpointObserver, private flightService: FlightService) {

  }

  ngOnInit(): void {
    this.flightService.list().subscribe(data => {
      this.flights = data;
    });
  }

  deleteFlight(id: string) {
    this.flightService.delete(id).subscribe(() => {
      this.flights = this.flights.filter(flight => flight.id !== id);
    })
  }
}
