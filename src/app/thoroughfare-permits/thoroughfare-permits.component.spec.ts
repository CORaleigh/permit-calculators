import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ThoroughfarePermitsComponent } from './thoroughfare-permits.component';

describe('ThoroughfarePermitsComponent', () => {
  let component: ThoroughfarePermitsComponent;
  let fixture: ComponentFixture<ThoroughfarePermitsComponent>;

  beforeEach(waitForAsync(() => {
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
