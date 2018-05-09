import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenspaceDialogComponent } from './openspace-dialog.component';

describe('OpenspaceDialogComponent', () => {
  let component: OpenspaceDialogComponent;
  let fixture: ComponentFixture<OpenspaceDialogComponent>;

  beforeEach(async(() => {
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
