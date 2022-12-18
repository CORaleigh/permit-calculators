import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StormwaterMapComponent } from './stormwater-map.component';

describe('StormwaterMapComponent', () => {
  let component: StormwaterMapComponent;
  let fixture: ComponentFixture<StormwaterMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StormwaterMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormwaterMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
