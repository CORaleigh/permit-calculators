import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightofwayPermitsComponent } from './rightofway-permits.component';

describe('RightofwayPermitsComponent', () => {
  let component: RightofwayPermitsComponent;
  let fixture: ComponentFixture<RightofwayPermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightofwayPermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightofwayPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
