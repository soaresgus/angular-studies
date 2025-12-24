import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingSvgComponent } from './using-svg.component';

describe('UsingSvgComponent', () => {
  let component: UsingSvgComponent;
  let fixture: ComponentFixture<UsingSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingSvgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
