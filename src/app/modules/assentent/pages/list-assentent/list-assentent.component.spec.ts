import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAssententComponent } from './list-assentent.component';

describe('ListAssententComponent', () => {
  let component: ListAssententComponent;
  let fixture: ComponentFixture<ListAssententComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListAssententComponent]
    });
    fixture = TestBed.createComponent(ListAssententComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
