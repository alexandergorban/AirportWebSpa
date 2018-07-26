
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureDetailsComponent } from './departure-details.component';

describe('DepartureDetailsComponent', () => {
  let component: DepartureDetailsComponent;
  let fixture: ComponentFixture<DepartureDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartureDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DepartureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
