import {Component, OnInit} from '@angular/core';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {CrewService} from '../../shared/services/crew.service';
import {Crew} from '../../shared/models/crew';

@Component({
  selector: 'crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.less'],
})
export class CrewComponent implements OnInit {
  crews: Crew[];

  constructor(private breakpointObserver: BreakpointObserver, private crewService: CrewService) {

  }

  ngOnInit(): void {
    this.crewService.list().subscribe(data => {
      this.crews = data;
    });
  }
}
