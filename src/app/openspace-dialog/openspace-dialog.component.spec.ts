import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { OpenspaceDialogComponent } from './openspace-dialog.component';

describe('OpenspaceDialogComponent', () => {
  let component: OpenspaceDialogComponent;
  let fixture: ComponentFixture<OpenspaceDialogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenspaceDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenspaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
