import {Component, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {DepartureService} from '../../shared/services/departure.service';
import {Departure} from '../../shared/models/departure';

@Component({
  selector: 'departure',
  templateUrl: './departure.component.html',
  styleUrls: ['./departure.component.less'],
})
export class DepartureComponent implements OnInit {
  departures: Departure[];

  constructor(private breakpointObserver: BreakpointObserver, private departureService: DepartureService) {

  }

  ngOnInit(): void {
    this.departureService.list().subscribe(data => {
      this.departures = data;
    });
  }
}
