import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNoIdComponent } from './employee-no-id.component';

describe('EmployeeNoIdComponent', () => {
  let component: EmployeeNoIdComponent;
  let fixture: ComponentFixture<EmployeeNoIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeNoIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNoIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
