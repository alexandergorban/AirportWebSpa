import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {AirplaneService} from '../../shared/services/airplane.service';
import {AirplaneType} from '../../shared/models/airplanetype';

@Component({
  selector: 'airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.css'],
})
export class AirplaneComponent implements OnInit {
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

  constructor(private breakpointObserver: BreakpointObserver, private airplaneService: AirplaneService) {

  }

  ngOnInit(): void {
    this.airplaneService.list().subscribe(data => {
      debugger;
    });
  }
}
