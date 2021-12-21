import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsContentComponent } from './planets-content.component';

describe('PlanetsContentComponent', () => {
  let component: PlanetsContentComponent;
  let fixture: ComponentFixture<PlanetsContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetsContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
