import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenspacePermitsComponent } from './openspace-permits.component';

describe('OpenspacePermitsComponent', () => {
  let component: OpenspacePermitsComponent;
  let fixture: ComponentFixture<OpenspacePermitsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenspacePermitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenspacePermitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
