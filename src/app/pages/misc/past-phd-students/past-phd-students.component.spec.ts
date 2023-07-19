import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPhdStudentsComponent } from './past-phd-students.component';

describe('PastPhdStudentsComponent', () => {
  let component: PastPhdStudentsComponent;
  let fixture: ComponentFixture<PastPhdStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPhdStudentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastPhdStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
