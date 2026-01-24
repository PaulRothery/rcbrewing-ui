import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjunctEdit } from './adjunct-edit';

describe('AdjunctEdit', () => {
  let component: AdjunctEdit;
  let fixture: ComponentFixture<AdjunctEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjunctEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjunctEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
