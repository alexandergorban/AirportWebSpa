import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StewardessService} from '../../../shared/services/stewardess.service';
import {Stewardess} from '../../../shared/models/stewardess';

@Component({
  selector: 'stewardess-details',
  templateUrl: './stewardess-details.component.html',
  styleUrls: ['./stewardess-details.component.css'],
})
export class StewardessDetailsComponent implements OnInit {
  stewardess: Stewardess;

  constructor(private route:ActivatedRoute, private stewardessService: StewardessService) {

  }

  ngOnInit() {
    this.stewardessService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.stewardess = data;
    });
  }
}
