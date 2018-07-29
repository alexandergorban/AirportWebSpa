import {Component, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {AirplaneService} from '../../shared/services/airplane.service';
import {Airplane} from '../../shared/models/airplane';

@Component({
  selector: 'airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.less'],
})
export class AirplaneComponent implements OnInit {
  airplanes: Airplane[];

  constructor(private breakpointObserver: BreakpointObserver, private airplaneService: AirplaneService) {

  }

  ngOnInit(): void {
    this.airplaneService.list().subscribe(data => {
      this.airplanes = data;
    });
  }
}
