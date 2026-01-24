import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjunctList } from './adjunct-list';

describe('AdjunctList', () => {
  let component: AdjunctList;
  let fixture: ComponentFixture<AdjunctList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdjunctList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdjunctList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
