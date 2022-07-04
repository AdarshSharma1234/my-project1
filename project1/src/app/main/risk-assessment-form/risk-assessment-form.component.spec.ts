import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskAssessmentFormComponent } from './risk-assessment-form.component';

describe('RiskAssessmentFormComponent', () => {
  let component: RiskAssessmentFormComponent;
  let fixture: ComponentFixture<RiskAssessmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RiskAssessmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskAssessmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
