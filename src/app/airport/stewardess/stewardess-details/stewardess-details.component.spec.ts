
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessDetailsComponent } from './stewardess-details.component';

describe('StewardessDetailsComponent', () => {
  let component: StewardessDetailsComponent;
  let fixture: ComponentFixture<StewardessDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StewardessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
