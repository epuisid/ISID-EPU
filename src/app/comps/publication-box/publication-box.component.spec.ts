import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicationBoxComponent } from './publication-box.component';

describe('PublicationBoxComponent', () => {
  let component: PublicationBoxComponent;
  let fixture: ComponentFixture<PublicationBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicationBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicationBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
