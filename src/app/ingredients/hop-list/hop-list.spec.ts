import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopList } from './hop-list';

describe('HopList', () => {
  let component: HopList;
  let fixture: ComponentFixture<HopList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HopList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
