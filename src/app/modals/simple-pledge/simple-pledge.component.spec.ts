import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePledgeComponent } from './simple-pledge.component';

describe('SimplePledgeComponent', () => {
  let component: SimplePledgeComponent;
  let fixture: ComponentFixture<SimplePledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimplePledgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
