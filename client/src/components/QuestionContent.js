import React from "react";
import PossibleAnswer from "./PossibleAnswer";

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
            <div class="question-1 valign-text-middle poppins-normal-white-40px">
              {props.questionNumber}
            </div>
          </div>
        </div>
        <img class="arrow-1" src="img/arrow-1-1@2x.svg" />
        <div class="which-of-the-followi">{props.question}</div>
        <PossibleAnswer
          letter="A"
          text={props.answers[0]}
          onClick={props.onClick}
        />
        <PossibleAnswer
          letter="B"
          text={props.answers[1]}
          onClick={props.onClick}
        />
        <PossibleAnswer
          letter="C"
          text={props.answers[2]}
          onClick={props.onClick}
        />
        <PossibleAnswer
          letter="D"
          text={props.answers[3]}
          onClick={props.onClick}
        />
      </div>
    </>
  );
};

export default QuestionContent;
