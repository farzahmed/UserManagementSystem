import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DowmloadSelectionComponent } from './dowmload-selection.component';

describe('DowmloadSelectionComponent', () => {
  let component: DowmloadSelectionComponent;
  let fixture: ComponentFixture<DowmloadSelectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DowmloadSelectionComponent]
    });
    fixture = TestBed.createComponent(DowmloadSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
