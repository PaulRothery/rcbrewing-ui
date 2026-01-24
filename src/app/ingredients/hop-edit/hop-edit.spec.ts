import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopEdit } from './hop-edit';

describe('HopEdit', () => {
  let component: HopEdit;
  let fixture: ComponentFixture<HopEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HopEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
