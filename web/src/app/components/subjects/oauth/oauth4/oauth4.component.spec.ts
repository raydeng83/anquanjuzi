import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth4Component } from './oauth4.component';

describe('Oauth4Component', () => {
  let component: Oauth4Component;
  let fixture: ComponentFixture<Oauth4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oauth4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oauth4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
