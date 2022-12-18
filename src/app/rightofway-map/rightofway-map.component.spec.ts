import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RightofwayMapComponent } from './rightofway-map.component';

describe('RightofwayMapComponent', () => {
  let component: RightofwayMapComponent;
  let fixture: ComponentFixture<RightofwayMapComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RightofwayMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightofwayMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
