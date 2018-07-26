
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { StewardessComponent } from './stewardess.component';

describe('StewardessComponent', () => {
  let component: StewardessComponent;
  let fixture: ComponentFixture<StewardessComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StewardessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StewardessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
