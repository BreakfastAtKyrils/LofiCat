import React from 'react';
import Question from '../components/Question';
import QuizSideBar from '../components/QuizSideBar';
import './quiz.css'

const Quiz = () => {
  return (
    <>
    <div class="container-center-horizontal">
    <input type="hidden" id="anPageName" name="page" value="quiz" />
      <div class="quiz screen">
        <div class="overlap-group10">
          <img class="study_background" src="img/study-background-1@1x.png" />
          <div class="overlap-group6">
            <div class="group-container">
              <div class="group-14">
                <div class="rectangle-10"></div>
              </div>
              <div class="overlap-group-1">
                <div class="rectangle-11"></div>
                <div class="question-1 valign-text-middle poppins-normal-white-40px">QUESTION 1</div>
              </div>
            </div>
            <img class="arrow-1" src="img/arrow-1-1@2x.svg" />
            <div class="which-of-the-followi">
              Which of the following is the appropriate formatting for an infinite loop?
            </div>
            <div class="overlap-group2">
              <div class="while-true valign-text-middle poppins-normal-white-25px">while(True)</div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-5@2x.svg" />
                <div class="a valign-text-middle poppins-normal-white-30px">A</div>
              </div>
            </div>
            <div class="overlap-group3">
              <div class="overlap-group-2">
                <img class="ellipse-3" src="img/ellipse-3-6@2x.svg" />
                <div class="b valign-text-middle poppins-normal-white-30px">B</div>
              </div>
              <div class="whilecounter0 valign-text-middle poppins-normal-white-25px">while(counter&gt;0)</div>
            </div>
            <div class="overlap-group4">
              <div class="for-counter-in-rangex valign-text-middle poppins-normal-white-25px">
                for counter in range(x)
              </div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-7@2x.svg" />
                <div class="d valign-text-middle poppins-normal-white-30px">D</div>
              </div>
            </div>
            <div class="overlap-group5">
              <div class="for-counter-in-range-true valign-text-middle poppins-normal-white-25px">
                for counter in range(True)
              </div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-8@2x.svg" />
                <div class="c valign-text-middle poppins-normal-white-30px">C</div>
              </div>
            </div>
          </div>
          <img class="lickcat" src="img/lickcat@2x.png" />
          <div class="overlap-group9">
            <div class="overlap-group-3"><div class="quiz-chapter-1 valign-text-middle">QUIZ: Chapter 1</div></div>
            <div class="overlap-group1">
              <div class="question valign-text-middle poppins-normal-black-25px">QUESTION 1</div>
            </div>
            <div class="overlap-group2-1">
              <div class="question valign-text-middle poppins-normal-black-25px">QUESTION 2</div>
            </div>
            <div class="overlap-group3-1">
              <div class="question valign-text-middle poppins-normal-black-25px">QUESTION 3</div>
            </div>
            <div class="overlap-group4-1">
              <div class="question valign-text-middle poppins-normal-black-25px">QUESTION 4</div>
            </div>
            <div class="overlap-group5-1">
              <div class="question valign-text-middle poppins-normal-white-25px">QUESTION 5</div>
            </div>
            <div class="overlap-group6-1">
              <div class="question valign-text-middle poppins-normal-white-25px">QUESTION 6</div>
            </div>
            <a href="study.html">
              <div class="group-22"><div class="back-to-studying valign-text-middle">back to studying...</div></div></a>
              <a href="/study"><img class="arrow-2" src="img/arrow-2@2x.svg" /> </a>
            <div class="overlap-group7"><div class="final-exam valign-text-middle">FINAL EXAM</div></div>
            <div class="loops valign-text-middle">Loops</div>
            <div class="overlap-group8">
              <img class="ellipse-3-1" src="img/ellipse-3@2x.svg" />
              <div class="number valign-text-middle poppins-normal-white-30px">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <QuizSideBar />
      <Question />
    </>
  );
};

export default Quiz;
