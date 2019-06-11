import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightofwayDialogComponent } from './rightofway-dialog.component';

describe('RightofwayDialogComponent', () => {
  let component: RightofwayDialogComponent;
  let fixture: ComponentFixture<RightofwayDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightofwayDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightofwayDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
