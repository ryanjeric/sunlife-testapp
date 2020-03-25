import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA  } from '@angular/core';

import { PolicyservicingComponent } from './policyservicing.component';

describe('PolicyservicingComponent', () => {
  let component: PolicyservicingComponent;
  let fixture: ComponentFixture<PolicyservicingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolicyservicingComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(PolicyservicingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
