import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtRankingComponent } from './art-ranking.component';

describe('ArtRankingComponent', () => {
  let component: ArtRankingComponent;
  let fixture: ComponentFixture<ArtRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
