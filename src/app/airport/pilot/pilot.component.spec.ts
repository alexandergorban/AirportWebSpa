
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotComponent } from './pilot.component';

describe('PilotComponent', () => {
  let component: PilotComponent;
  let fixture: ComponentFixture<PilotComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
