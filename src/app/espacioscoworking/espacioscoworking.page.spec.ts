import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioscoworkingPage } from './espacioscoworking.page';

describe('EspacioscoworkingPage', () => {
  let component: EspacioscoworkingPage;
  let fixture: ComponentFixture<EspacioscoworkingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EspacioscoworkingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EspacioscoworkingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
