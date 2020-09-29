import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationQuizORSurveyComponent } from './creation-quiz-survey.component';

describe('CreationQuizORSurveyComponent', () => {
  let component: CreationQuizORSurveyComponent;
  let fixture: ComponentFixture<CreationQuizORSurveyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationQuizORSurveyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationQuizORSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
