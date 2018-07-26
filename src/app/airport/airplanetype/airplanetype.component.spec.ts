
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanetypeComponent } from './airplanetype.component';

describe('AirplanetypeComponent', () => {
  let component: AirplanetypeComponent;
  let fixture: ComponentFixture<AirplanetypeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanetypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirplanetypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
