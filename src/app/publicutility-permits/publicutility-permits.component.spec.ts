import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PublicutilityPermitsComponent } from './publicutility-permits.component';

describe('PublicutilityPermitsComponent', () => {
  let component: PublicutilityPermitsComponent;
  let fixture: ComponentFixture<PublicutilityPermitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicutilityPermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicutilityPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
