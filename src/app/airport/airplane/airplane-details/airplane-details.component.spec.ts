
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneDetailsComponent } from './airplane-details.component';

describe('AirplaneDetailsComponent', () => {
  let component: AirplaneDetailsComponent;
  let fixture: ComponentFixture<AirplaneDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirplaneDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
