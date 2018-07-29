import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Crew} from '../../../shared/models/crew';
import {CrewService} from '../../../shared/services/crew.service';

@Component({
  selector: 'crew-details',
  templateUrl: './crew-details.component.html',
  styleUrls: ['./crew-details.component.css'],
})
export class CrewDetailsComponent implements OnInit {
  crew: Crew;

  constructor(private route:ActivatedRoute, private crewService: CrewService) {

  }

  ngOnInit() {
    this.crewService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.crew = data;
    });
  }
}
