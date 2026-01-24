import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeastList } from './yeast-list';

describe('YeastList', () => {
  let component: YeastList;
  let fixture: ComponentFixture<YeastList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YeastList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YeastList);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
