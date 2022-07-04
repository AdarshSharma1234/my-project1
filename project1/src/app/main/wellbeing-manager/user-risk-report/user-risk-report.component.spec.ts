import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRiskReportComponent } from './user-risk-report.component';

describe('UserRiskReportComponent', () => {
  let component: UserRiskReportComponent;
  let fixture: ComponentFixture<UserRiskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRiskReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRiskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
