import {Component, OnInit} from '@angular/core';
import {PilotService} from '../../../shared/services/pilot.service';
import {ActivatedRoute} from '@angular/router';
import {Pilot} from '../../../shared/models/pilot';

@Component({
  selector: 'pilot-details',
  templateUrl: './pilot-details.component.html',
  styleUrls: ['./pilot-details.component.css'],
})
export class PilotDetailsComponent implements OnInit {
  pilot: Pilot;

  constructor(private route:ActivatedRoute, private pilotService: PilotService) {

  }

  ngOnInit() {
    this.pilotService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.pilot = data;
    });
  }
}
