import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorspageComponent } from './visitorspage.component';

describe('VisitorspageComponent', () => {
  let component: VisitorspageComponent;
  let fixture: ComponentFixture<VisitorspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitorspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitorspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
