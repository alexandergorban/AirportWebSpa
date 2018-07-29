import {Component, OnInit} from '@angular/core';
import {FlightService} from '../../../shared/services/flight.service';
import {Flight} from '../../../shared/models/flight';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'flight-details',
  templateUrl: './flight-details.component.html',
  styleUrls: ['./flight-details.component.css'],
})
export class FlightDetailsComponent implements OnInit {
  flight: Flight;

  constructor(private route:ActivatedRoute, private flightService: FlightService) {

  }

  ngOnInit() {
    this.flightService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.flight = data;
    });
  }
}
