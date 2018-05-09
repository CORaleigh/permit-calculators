import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StormwaterMapComponent } from './stormwater-map.component';

describe('StormwaterMapComponent', () => {
  let component: StormwaterMapComponent;
  let fixture: ComponentFixture<StormwaterMapComponent>;

  beforeEach(async(() => {
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
