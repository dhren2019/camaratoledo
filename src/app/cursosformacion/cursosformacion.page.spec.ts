import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosformacionPage } from './cursosformacion.page';

describe('CursosformacionPage', () => {
  let component: CursosformacionPage;
  let fixture: ComponentFixture<CursosformacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosformacionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosformacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
