import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarPageComponent } from './seminar-page.component';

describe('SeminarPageComponent', () => {
  let component: SeminarPageComponent;
  let fixture: ComponentFixture<SeminarPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminarPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
