import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlogoutComponent } from './alogout.component';

describe('AlogoutComponent', () => {
  let component: AlogoutComponent;
  let fixture: ComponentFixture<AlogoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlogoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
