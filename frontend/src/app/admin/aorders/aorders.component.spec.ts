import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AordersComponent } from './aorders.component';

describe('AordersComponent', () => {
  let component: AordersComponent;
  let fixture: ComponentFixture<AordersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AordersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
