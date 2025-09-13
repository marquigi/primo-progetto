import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titolo } from './titolo';

describe('Titolo', () => {
  let component: Titolo;
  let fixture: ComponentFixture<Titolo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Titolo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Titolo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
