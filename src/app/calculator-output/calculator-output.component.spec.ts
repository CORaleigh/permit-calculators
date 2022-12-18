import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CalculatorOutputComponent } from './calculator-output.component';

describe('CalculatorOutputComponent', () => {
  let component: CalculatorOutputComponent;
  let fixture: ComponentFixture<CalculatorOutputComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
