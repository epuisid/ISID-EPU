import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OthersPageComponent } from './others-page.component';

describe('OthersPageComponent', () => {
  let component: OthersPageComponent;
  let fixture: ComponentFixture<OthersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OthersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OthersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
