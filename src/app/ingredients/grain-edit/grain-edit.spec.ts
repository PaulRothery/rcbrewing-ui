import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainEdit } from './grain-edit';

describe('GrainEdit', () => {
  let component: GrainEdit;
  let fixture: ComponentFixture<GrainEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrainEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
