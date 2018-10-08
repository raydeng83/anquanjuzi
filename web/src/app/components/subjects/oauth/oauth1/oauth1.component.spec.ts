import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Oauth1Component } from './oauth1.component';

describe('Oauth1Component', () => {
  let component: Oauth1Component;
  let fixture: ComponentFixture<Oauth1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oauth1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oauth1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
