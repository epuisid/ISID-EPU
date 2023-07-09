import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentboxComponent } from './studentbox.component';

describe('StudentboxComponent', () => {
  let component: StudentboxComponent;
  let fixture: ComponentFixture<StudentboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
