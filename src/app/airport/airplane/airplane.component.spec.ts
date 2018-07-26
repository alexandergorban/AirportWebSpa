
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplaneComponent } from './airplane.component';

describe('AirplaneComponent', () => {
  let component: AirplaneComponent;
  let fixture: ComponentFixture<AirplaneComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplaneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirplaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
