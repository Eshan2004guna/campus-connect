import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyAdd } from './faculty-add';

describe('FacultyAdd', () => {
  let component: FacultyAdd;
  let fixture: ComponentFixture<FacultyAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FacultyAdd],
    }).compileComponents();

    fixture = TestBed.createComponent(FacultyAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
