import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersContentComponent } from './characters-content.component';

describe('CharactersContentComponent', () => {
  let component: CharactersContentComponent;
  let fixture: ComponentFixture<CharactersContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
