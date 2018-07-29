import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'airplanetype-details',
  templateUrl: './airplanetype-details.component.html',
  styleUrls: ['./airplanetype-details.component.less'],
})
export class AirplanetypeDetailsComponent {


  constructor(private breakpointObserver: BreakpointObserver) {}
}
