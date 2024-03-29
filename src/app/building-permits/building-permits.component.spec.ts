import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BuildingPermitsComponent } from './building-permits.component';

describe('BuildingPermitsComponent', () => {
  let component: BuildingPermitsComponent;
  let fixture: ComponentFixture<BuildingPermitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingPermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingPermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
