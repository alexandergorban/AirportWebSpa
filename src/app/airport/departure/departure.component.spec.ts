
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureComponent } from './departure.component';

describe('DepartureComponent', () => {
  let component: DepartureComponent;
  let fixture: ComponentFixture<DepartureComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
