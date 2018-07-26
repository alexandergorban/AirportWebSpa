
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirplanetypeDetailsComponent } from './airplanetype-details.component';

describe('AirplanetypeDetailsComponent', () => {
  let component: AirplanetypeDetailsComponent;
  let fixture: ComponentFixture<AirplanetypeDetailsComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AirplanetypeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirplanetypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
