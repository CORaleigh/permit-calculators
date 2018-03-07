import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThoroughfarePermitsComponent } from './thoroughfare-permits.component';

describe('ThoroughfarePermitsComponent', () => {
  let component: ThoroughfarePermitsComponent;
  let fixture: ComponentFixture<ThoroughfarePermitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThoroughfarePermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThoroughfarePermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
