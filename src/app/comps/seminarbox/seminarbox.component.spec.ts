import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeminarboxComponent } from './seminarbox.component';

describe('SeminarboxComponent', () => {
  let component: SeminarboxComponent;
  let fixture: ComponentFixture<SeminarboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeminarboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeminarboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
