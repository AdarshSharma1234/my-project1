import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellbeingManagerComponent } from './wellbeing-manager.component';

describe('WellbeingManagerComponent', () => {
  let component: WellbeingManagerComponent;
  let fixture: ComponentFixture<WellbeingManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellbeingManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellbeingManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
