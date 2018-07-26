
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewComponent } from './crew.component';

describe('CrewComponent', () => {
  let component: CrewComponent;
  let fixture: ComponentFixture<CrewComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
