import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth3Component } from './oauth3.component';

describe('Oauth3Component', () => {
  let component: Oauth3Component;
  let fixture: ComponentFixture<Oauth3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oauth3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oauth3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
