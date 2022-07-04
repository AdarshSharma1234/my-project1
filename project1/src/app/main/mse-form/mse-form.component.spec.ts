import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MseFormComponent } from './mse-form.component';

describe('MseFormComponent', () => {
  let component: MseFormComponent;
  let fixture: ComponentFixture<MseFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MseFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
