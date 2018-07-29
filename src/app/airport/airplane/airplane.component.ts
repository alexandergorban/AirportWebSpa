import {Component, OnInit} from '@angular/core';
import {AirplaneService} from '../../shared/services/airplane.service';
import {Airplane} from '../../shared/models/airplane';
import {Router} from '@angular/router';

@Component({
  selector: 'airplane',
  templateUrl: './airplane.component.html',
  styleUrls: ['./airplane.component.less'],
})
export class AirplaneComponent implements OnInit {
  airplanes: Airplane[];

  constructor(private router: Router, private airplaneService: AirplaneService) {

  }

  ngOnInit(): void {
    this.airplaneService.list().subscribe(data => {
      this.airplanes = data;
    });
  }
}
