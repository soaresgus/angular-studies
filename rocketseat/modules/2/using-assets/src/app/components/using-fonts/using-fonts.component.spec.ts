import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingFontsComponent } from './using-fonts.component';

describe('UsingFontsComponent', () => {
  let component: UsingFontsComponent;
  let fixture: ComponentFixture<UsingFontsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingFontsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingFontsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
