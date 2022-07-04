import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounselorDashboardComponent } from './counselor-dashboard.component';

describe('CounselorDashboardComponent', () => {
  let component: CounselorDashboardComponent;
  let fixture: ComponentFixture<CounselorDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounselorDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CounselorDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
