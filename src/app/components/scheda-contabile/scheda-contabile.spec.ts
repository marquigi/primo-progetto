import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedaContabile } from './scheda-contabile';

describe('SchedaContabile', () => {
  let component: SchedaContabile;
  let fixture: ComponentFixture<SchedaContabile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SchedaContabile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedaContabile);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
