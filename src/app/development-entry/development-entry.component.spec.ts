import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DevelopmentEntryComponent } from './development-entry.component';

describe('DevelopmentEntryComponent', () => {
  let component: DevelopmentEntryComponent;
  let fixture: ComponentFixture<DevelopmentEntryComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DevelopmentEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
