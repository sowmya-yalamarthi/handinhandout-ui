import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoutBooksComponent } from './handout-books.component';

describe('HandoutBooksComponent', () => {
  let component: HandoutBooksComponent;
  let fixture: ComponentFixture<HandoutBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandoutBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoutBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
