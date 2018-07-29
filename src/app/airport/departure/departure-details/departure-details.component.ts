import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DepartureService} from '../../../shared/services/departure.service';
import {Departure} from '../../../shared/models/departure';

@Component({
  selector: 'departure-details',
  templateUrl: './departure-details.component.html',
  styleUrls: ['./departure-details.component.css'],
})
export class DepartureDetailsComponent implements OnInit {
  departure: Departure;

  constructor(private route:ActivatedRoute, private departureService: DepartureService) {

  }

  ngOnInit() {
    this.departureService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.departure = data;
    });
  }
}
