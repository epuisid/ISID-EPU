import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonboxComponent } from './personbox.component';

describe('PersonboxComponent', () => {
  let component: PersonboxComponent;
  let fixture: ComponentFixture<PersonboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonboxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
