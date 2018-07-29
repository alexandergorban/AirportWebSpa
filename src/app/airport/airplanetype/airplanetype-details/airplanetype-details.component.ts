import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AirplaneType} from '../../../shared/models/airplanetype';
import {AirplanetypeService} from '../../../shared/services/airplanetype.service';

@Component({
  selector: 'airplanetype-details',
  templateUrl: './airplanetype-details.component.html',
  styleUrls: ['./airplanetype-details.component.less'],
})
export class AirplanetypeDetailsComponent implements OnInit  {
  airplaneType: AirplaneType;

  constructor(private route:ActivatedRoute, private airplanetypeService: AirplanetypeService) {

  }

  ngOnInit() {
    this.airplanetypeService.read(this.route.snapshot.params['id']).subscribe(data => {
      this.airplaneType = data;
    });
  }
}
