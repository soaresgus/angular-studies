import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingImagesComponent } from './using-images.component';

describe('UsingImagesComponent', () => {
  let component: UsingImagesComponent;
  let fixture: ComponentFixture<UsingImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsingImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsingImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
