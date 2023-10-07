import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTomaComponent } from './list-toma.component';

describe('ListTomaComponent', () => {
  let component: ListTomaComponent;
  let fixture: ComponentFixture<ListTomaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTomaComponent]
    });
    fixture = TestBed.createComponent(ListTomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
