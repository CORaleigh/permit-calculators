import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightofwayMapComponent } from './rightofway-map.component';

describe('RightofwayMapComponent', () => {
  let component: RightofwayMapComponent;
  let fixture: ComponentFixture<RightofwayMapComponent>;

  beforeEach(async(() => {
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
