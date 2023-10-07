import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterContribuyentComponent } from './register-contribuyent.component';

describe('RegisterContribuyentComponent', () => {
  let component: RegisterContribuyentComponent;
  let fixture: ComponentFixture<RegisterContribuyentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterContribuyentComponent]
    });
    fixture = TestBed.createComponent(RegisterContribuyentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
