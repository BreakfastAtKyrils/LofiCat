import React, {useState} from 'react';
import Question from '../components/Question';
import QuizSideBar from '../components/QuizSideBar';
import SideBarButtonQuestion from '../components/SideBarButtonQuestion';
import QuestionContent from '../components/QuestionContent';
import './quiz.css';

const Quiz = () => {
  const tempQuizData = { // content from https://www.programminghunk.com/2021/07/java-quiz-5for-loop.html
    'q1' : {
      'question': 'What is not a type of Java for-statement?',
      'questionNumber': 1,
      'answered?': false,
      'potentialAnswers': ['Simple for-statement', 'extended for-statement', 'for-else statement', 'Labeled for statement'],
      'correctAnswer': 2
    },
    'q2' : {
      'question': 'An enhanced FOR loop work with only Collection type data. Examples of Collection are ___.',
      'questionNumber': 2,
      'answered?': false,
      'potentialAnswers': ['Any regular array variable', 'ArrayList', 'HashMap, HashSet', 'ALL'],
      'correctAnswer': 3
    },
    'q3' : {
      'question': 'A BREAK or CONTINUE statement applies only to the ___ loop.',
      'questionNumber': 3,
      'answered?': false,
      'potentialAnswers': ['Inner loop', 'Always Outer loop', 'Sometimes A, sometimes B', 'none'],
      'correctAnswer': 0
    },
    'q4' : {
      'question': 'for is ______________ statement in java.',
      'questionNumber': 4,
      'answered?': false,
      'potentialAnswers': ['branching', 'iteration or looping', 'decision-making', 'all'],
      'correctAnswer': 0
    }

  };
  //const [data, setData] = useState('This is before the button click');
  const initialQ = tempQuizData.q1.question;
  const [question, setQuestion] = useState(initialQ);
  const [questionNumber, setQuestionNumber] = useState('Question 1');
  const [answered, setAnswered] = useState(false);
  const [currentQ, setCurrentQ] = useState('q1');

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
            <QuestionContent questionNumber={`${questionNumber}`} question={question} answers={tempQuizData[currentQ].potentialAnswers}/>
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
