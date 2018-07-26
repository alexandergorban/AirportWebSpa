
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewDetailsComponent } from './crew-details.component';

describe('CrewDetailsComponent', () => {
  let component: CrewDetailsComponent;
  let fixture: ComponentFixture<CrewDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
