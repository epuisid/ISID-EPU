import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastSeminarsPageComponent } from './past-seminars-page.component';

describe('PastSeminarsPageComponent', () => {
  let component: PastSeminarsPageComponent;
  let fixture: ComponentFixture<PastSeminarsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastSeminarsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastSeminarsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
