import {Component, OnInit} from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Pilot} from '../../shared/models/pilot';
import {PilotService} from '../../shared/services/pilot.service';

@Component({
  selector: 'pilot',
  templateUrl: './pilot.component.html',
  styleUrls: ['./pilot.component.less'],
})
export class PilotComponent implements OnInit {
  pilots: Pilot[];

  constructor(private breakpointObserver: BreakpointObserver, private pilotService: PilotService) {

  }

  ngOnInit(): void {
    this.pilotService.list().subscribe(data => {
      this.pilots = data;
    });
  }
}
