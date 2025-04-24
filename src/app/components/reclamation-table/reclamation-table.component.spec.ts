import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamationTableComponent } from './reclamation-table.component';

describe('ReclamationTableComponent', () => {
  let component: ReclamationTableComponent;
  let fixture: ComponentFixture<ReclamationTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReclamationTableComponent]
    });
    fixture = TestBed.createComponent(ReclamationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
