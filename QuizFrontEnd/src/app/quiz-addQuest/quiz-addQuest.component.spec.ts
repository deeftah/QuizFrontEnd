import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAddComponent } from './quiz-addQuest.component';

describe('QuizAddComponent', () => {
  let component: QuizAddComponent;
  let fixture: ComponentFixture<QuizAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
