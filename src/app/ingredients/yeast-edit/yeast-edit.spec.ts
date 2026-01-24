import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YeastEdit } from './yeast-edit';

describe('YeastEdit', () => {
  let component: YeastEdit;
  let fixture: ComponentFixture<YeastEdit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YeastEdit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YeastEdit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
