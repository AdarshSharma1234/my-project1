import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WbmCounselorComponent } from './wbm-counselor.component';

describe('WbmCounselorComponent', () => {
  let component: WbmCounselorComponent;
  let fixture: ComponentFixture<WbmCounselorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WbmCounselorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WbmCounselorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
