import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsqepageComponent } from './msqepage.component';

describe('MsqepageComponent', () => {
  let component: MsqepageComponent;
  let fixture: ComponentFixture<MsqepageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsqepageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MsqepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
