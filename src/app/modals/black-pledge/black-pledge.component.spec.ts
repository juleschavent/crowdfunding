import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlackPledgeComponent } from './black-pledge.component';

describe('BlackPledgeComponent', () => {
  let component: BlackPledgeComponent;
  let fixture: ComponentFixture<BlackPledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlackPledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlackPledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
