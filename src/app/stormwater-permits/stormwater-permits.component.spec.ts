import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StormwaterPermitsComponent } from './stormwater-permits.component';

describe('StormwaterPermitsComponent', () => {
  let component: StormwaterPermitsComponent;
  let fixture: ComponentFixture<StormwaterPermitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StormwaterPermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StormwaterPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
