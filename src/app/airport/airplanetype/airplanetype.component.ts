import {Component, OnInit} from '@angular/core';
import {AirplanetypeService} from '../../shared/services/airplanetype.service';
import {AirplaneType} from '../../shared/models/airplanetype';

@Component({
  selector: 'airplanetype',
  templateUrl: './airplanetype.component.html',
  styleUrls: ['./airplanetype.component.less'],
})
export class AirplanetypeComponent implements OnInit {
  airplaneTypes: AirplaneType[];

  constructor(private airplanetypeService: AirplanetypeService) {

  }

  ngOnInit(): void {
    this.airplanetypeService.list().subscribe(data => {
      this.airplaneTypes = data;
    });
  }

  deleteAirplaneType(id: string) {
    this.airplanetypeService.delete(id).subscribe(() => {
      this.airplaneTypes = this.airplaneTypes.filter(airplaneType => airplaneType.id !== id);
    })
  }
}
