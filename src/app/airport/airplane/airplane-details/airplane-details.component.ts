import {Component, OnInit} from '@angular/core';
import {Airplane} from '../../../shared/models/airplane';
import {ActivatedRoute, Router} from '@angular/router';
import {AirplaneService} from '../../../shared/services/airplane.service';

@Component({
  selector: 'airplane-details',
  templateUrl: './airplane-details.component.html',
  styleUrls: ['./airplane-details.component.css'],
})
export class AirplaneDetailsComponent implements OnInit {
  airplane: Airplane;

  constructor(private route:ActivatedRoute, private airplaneService: AirplaneService) {}

  ngOnInit() {
    this.airplaneService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.airplane = data;
    });
  }
}
