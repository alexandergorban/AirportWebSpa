import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {AirplanetypeService} from '../../shared/services/airplanetype.service';
import {AirplaneType} from '../../shared/models/airplanetype';

@Component({
  selector: 'airplanetype',
  templateUrl: './airplanetype.component.html',
  styleUrls: ['./airplanetype.component.less'],
})
export class AirplanetypeComponent implements OnInit {
  airplaneTypes: AirplaneType[];

  constructor(private breakpointObserver: BreakpointObserver, private airplanetypeService: AirplanetypeService) {

  }

  ngOnInit(): void {
    this.airplanetypeService.list().subscribe(data => {
      this.airplaneTypes = data;
      // debugger;
    });
  }
}
