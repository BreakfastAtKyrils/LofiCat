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
                <div class="question-1 valign-text-middle poppins-normal-white-40px">QUESTION 1</div>
              </div>
            </div>
            <div class="which-of-the-followi">
            {props.text}
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
    </>
  );
};

export default QuestionContent;
