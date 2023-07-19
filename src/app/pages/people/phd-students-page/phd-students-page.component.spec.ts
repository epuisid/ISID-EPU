import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdStudentsPageComponent } from './phd-students-page.component';

describe('PhdStudentsPageComponent', () => {
  let component: PhdStudentsPageComponent;
  let fixture: ComponentFixture<PhdStudentsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdStudentsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhdStudentsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
