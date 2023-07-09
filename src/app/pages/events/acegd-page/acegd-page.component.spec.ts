import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcegdPageComponent } from './acegd-page.component';

describe('AcegdPageComponent', () => {
  let component: AcegdPageComponent;
  let fixture: ComponentFixture<AcegdPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcegdPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcegdPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
