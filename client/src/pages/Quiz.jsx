import React, {useState} from 'react';
import Question from '../components/Question';
import QuizSideBar from '../components/QuizSideBar';
import SideBarButtonQuestion from '../components/SideBarButtonQuestion';
import QuestionContent from '../components/QuestionContent';
import './quiz.css';

const Quiz = () => {
  const tempQuizData = {
    'q1' : {
      'question': 'This is Question1, add data later.',
      'questionNumber': 1,
      'answered?': false,
      'potentialAnswers': ['This is potential answer A Q1', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
      'correctAnswer': 0
    },
    'q2' : {
      'question': 'This is Question2, add data later.',
      'questionNumber': 2,
      'answered?': false,
      'potentialAnswers': ['This is potential answer A Q2', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
      'correctAnswer': 1
    },
    'q3' : {
      'question': 'This is Question3, add data later.',
      'questionNumber': 3,
      'answered?': false,
      'potentialAnswers': ['This is potential answer A Q3', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
      'correctAnswer': 2
    },
    'q4' : {
      'question': 'This is Question4, add data later.',
      'questionNumber': 4,
      'answered?': false,
      'potentialAnswers': ['This is potential answer A Q4', 'This is potential answer B', 'This is potential answer C', 'This is potential answer D'],
      'correctAnswer': 3
    }

  };
  //const [data, setData] = useState('This is before the button click');
  const [question, setQuestion] = useState('Click on a Question to get started!');
  const [questionNumber, setQuestionNumber] = useState('');
  const [answered, setAnswered] = useState(false);
  const [currentQ, setCurrentQ] = useState(null);

  const displayQuestion = (question, number) => {
    setQuestion(question);
    setQuestionNumber(`Question ${number}`);
    setCurrentQ(`q${number}`);
    console.log(currentQ);
  };
  const answerQuestion = async (letter) => {
    //check if answer is correct

    setAnswered(true);
  };

  return (
    <>
      <div class="container-center-horizontal">
        <input type="hidden" id="anPageName" name="page" value="quiz" />
        <div class="quiz screen">
          <div class="overlap-group10">
            <img class="study_background" src="img/study-background-1@1x.png" />
            <QuestionContent questionNumber={`${questionNumber}`} question={question} answers={tempQuizData[`${currentQ}`].potentialAnswers}/>
            <img class="lickcat" src="img/lickcat@2x.png" />
            <div class="overlap-group9">
              <div class="overlap-group-3"><div class="quiz-chapter-1 valign-text-middle">QUIZ: Chapter 1</div></div>
              <SideBarButtonQuestion questionNumber="Question 1" onClick=
                {
                  () => {
                    const question = tempQuizData.q1.question;
                    const number = 1;
                    displayQuestion(question, number);
                  }
                }/>
              <SideBarButtonQuestion questionNumber="Question 2" onClick=
                {
                  () => {
                    const question = tempQuizData.q2.question;
                    const number = 2;
                    displayQuestion(question, number);
                  }
                }/>
              <SideBarButtonQuestion questionNumber="Question 3" onClick=
                {
                  () => {
                    const question = tempQuizData.q3.question;
                    const number = 3;
                    displayQuestion(question, number);
                  }
                }/>
              <SideBarButtonQuestion questionNumber="Question 4" onClick=
                {
                  () => {
                    const question = tempQuizData.q4.question;
                    const number = 4;
                    displayQuestion(question, number);
                  }
                }/>
              <a href="/study">
                <div class="group-22"><div class="back-to-studying valign-text-middle">back to studying...</div></div></a>
              <a href="/study"><img class="arrow-2" src="img/arrow-2@2x.svg" /> </a>
              <div class="overlap-group7"><div class="final-exam valign-text-middle">FINAL EXAM</div></div>
              {/* <div class="overlap-group8">
                <img class="ellipse-3-1" src="img/ellipse-3@2x.svg" />
                <div class="number valign-text-middle poppins-normal-white-30px">1</div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
