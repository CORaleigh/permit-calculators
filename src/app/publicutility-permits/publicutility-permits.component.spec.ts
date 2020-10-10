import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicutilityPermitsComponent } from './publicutility-permits.component';

describe('PublicutilityPermitsComponent', () => {
  let component: PublicutilityPermitsComponent;
  let fixture: ComponentFixture<PublicutilityPermitsComponent>;

  beforeEach(async(() => {
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
