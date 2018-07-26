
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotDetailsComponent } from './pilot-details.component';

describe('PilotDetailsComponent', () => {
  let component: PilotDetailsComponent;
  let fixture: ComponentFixture<PilotDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PilotDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
