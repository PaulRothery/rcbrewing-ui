import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainList } from './grain-list';

describe('GrainList', () => {
  let component: GrainList;
  let fixture: ComponentFixture<GrainList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrainList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
