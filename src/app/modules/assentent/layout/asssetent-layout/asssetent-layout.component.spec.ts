import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsssetentLayoutComponent } from './asssetent-layout.component';

describe('AsssetentLayoutComponent', () => {
  let component: AsssetentLayoutComponent;
  let fixture: ComponentFixture<AsssetentLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsssetentLayoutComponent]
    });
    fixture = TestBed.createComponent(AsssetentLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
