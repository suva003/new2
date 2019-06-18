import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewarrivelComponent } from './newarrivel.component';

describe('NewarrivelComponent', () => {
  let component: NewarrivelComponent;
  let fixture: ComponentFixture<NewarrivelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewarrivelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewarrivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
