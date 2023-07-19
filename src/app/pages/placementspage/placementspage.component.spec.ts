import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementspageComponent } from './placementspage.component';

describe('PlacementspageComponent', () => {
  let component: PlacementspageComponent;
  let fixture: ComponentFixture<PlacementspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementspageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacementspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
