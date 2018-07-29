import {Component, OnInit} from '@angular/core';
import {Stewardess} from '../../shared/models/stewardess';
import {StewardessService} from '../../shared/services/stewardess.service';

@Component({
  selector: 'stewardess',
  templateUrl: './stewardess.component.html',
  styleUrls: ['./stewardess.component.less'],
})
export class StewardessComponent implements OnInit {
  stewardesses: Stewardess[];

  constructor(private stewardessService: StewardessService) {

  }

  ngOnInit(): void {
    this.stewardessService.list().subscribe(data => {
      this.stewardesses = data;
    });
  }

  deleteStewardess(id: string) {
    this.stewardessService.delete(id).subscribe(() => {
      this.stewardesses = this.stewardesses.filter(stewardess => stewardess.id !== id);
    })
  }
}
