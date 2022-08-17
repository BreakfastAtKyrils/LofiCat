import React from "react";

const SideBarButtonQuestion = (props) => {
  return (
    <>
      <button
        type="button"
        class="overlap-group-container-1"
        onClick={props.onClick}
      >
        <div class="overlap-group-5">
          <div class="question valign-text-middle poppins-normal-black-25px">
            {props.questionNumber}
          </div>
        </div>
        {props.isAnswered ? (
          <div class="overlap-group1-3">
            <img class="ellipse-3" src="img/ellipse-3-9@2x.svg" />
            <div class="a valign-text-middle poppins-normal-white-30px">✔️</div>
          </div>
        ) : props.isAnswered !== null ? (
          <div class="overlap-group1-3">
            <img class="ellipse-3" src="img/ellipse-3-10@2x.svg" />
            <div class="a valign-text-middle poppins-normal-white-30px">❌</div>
          </div>
        ) : null}
      </button>
    </>
  );
};

export default SideBarButtonQuestion;
