import {Component, OnInit} from '@angular/core';
import {map} from 'rxjs/operators';
import {Breakpoints, BreakpointObserver} from '@angular/cdk/layout';
import {AirplaneType} from '../../shared/models/airplanetype';
import {CrewService} from '../../shared/services/crew.service';

@Component({
  selector: 'crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  crews: AirplaneType[];

  constructor(private breakpointObserver: BreakpointObserver, private crewService: CrewService) {

  }

  ngOnInit(): void {
    this.crewService.list().subscribe(data => {
      debugger;
    });
  }
}
