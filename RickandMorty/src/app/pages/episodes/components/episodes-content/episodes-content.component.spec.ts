import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodesContentComponent } from './episodes-content.component';

describe('EpisodesContentComponent', () => {
  let component: EpisodesContentComponent;
  let fixture: ComponentFixture<EpisodesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpisodesContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpisodesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
