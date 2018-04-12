import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgqSelect2Component } from './ngq-select2.component';

describe('NgqSelect2Component', () => {
  let component: NgqSelect2Component;
  let fixture: ComponentFixture<NgqSelect2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgqSelect2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgqSelect2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
