import React from "react";

const QuestionContent = (props) => {
  return (
    <>
      <div class="overlap-group6">
            <div class="group-container">
              <div class="group-14">
                <div class="rectangle-10"></div>
              </div>
              <div class="overlap-group-1">
                <div class="rectangle-11"></div>
                <div class="question-1 valign-text-middle poppins-normal-white-40px">{props.questionNumber}</div>
              </div>
            </div>
            <img class="arrow-1" src="img/arrow-1-1@2x.svg" />
            <div class="which-of-the-followi">
              {props.question}
            </div>
            <button type="button" class="overlap-group2" onClick={props.onClick}>
              <div class="while-true valign-text-middle poppins-normal-white-25px">{props.optionA}</div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-5@2x.svg" />
                <div class="a valign-text-middle poppins-normal-white-30px">A</div>
              </div>
            </button>
            <button type="button" class="overlap-group3" onClick={props.onClick}>
              <div class="overlap-group-2">
                <img class="ellipse-3" src="img/ellipse-3-6@2x.svg" />
                <div class="b valign-text-middle poppins-normal-white-30px">B</div>
              </div>
              <div class="whilecounter0 valign-text-middle poppins-normal-white-25px">{props.optionB}</div>
            </button>
            <button type="button" class="overlap-group5" onClick={props.onClick}>
              <div class="for-counter-in-range-true valign-text-middle poppins-normal-white-25px">{props.optionC}</div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-8@2x.svg" />
                <div class="c valign-text-middle poppins-normal-white-30px">C</div>
              </div>
            </button>
            <button type="button" class="overlap-group4" onClick={props.onClick}>
              <div class="for-counter-in-rangex valign-text-middle poppins-normal-white-25px">{props.optionD}</div>
              <div class="overlap-group">
                <img class="ellipse-3" src="img/ellipse-3-7@2x.svg" />
                <div class="d valign-text-middle poppins-normal-white-30px">D</div>
              </div>
            </button>
          </div>
    </>
  );
};

export default QuestionContent;
