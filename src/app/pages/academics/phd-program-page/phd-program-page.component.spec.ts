import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhdProgramPageComponent } from './phd-program-page.component';

describe('PhdProgramPageComponent', () => {
  let component: PhdProgramPageComponent;
  let fixture: ComponentFixture<PhdProgramPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhdProgramPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhdProgramPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
