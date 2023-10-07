import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssententComponent } from './create-assentent.component';

describe('CreateAssententComponent', () => {
  let component: CreateAssententComponent;
  let fixture: ComponentFixture<CreateAssententComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAssententComponent]
    });
    fixture = TestBed.createComponent(CreateAssententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
