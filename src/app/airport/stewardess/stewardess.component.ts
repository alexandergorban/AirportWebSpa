import {Component, OnInit} from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {Stewardess} from '../../shared/models/stewardess';
import {StewardessService} from '../../shared/services/stewardess.service';

@Component({
  selector: 'stewardess',
  templateUrl: './stewardess.component.html',
  styleUrls: ['./stewardess.component.less'],
})
export class StewardessComponent implements OnInit {
  stewardesses: Stewardess[];

  constructor(private breakpointObserver: BreakpointObserver, private stewardessService: StewardessService) {

  }

  ngOnInit(): void {
    this.stewardessService.list().subscribe(data => {
      this.stewardesses = data;
    });
  }
}
