import React from "react";

const TakeQuizButton = (props) => {
  return (
    <>
      <button type="button" class="group-1" onClick={props.onClick}>
        <div class="overlap-group-1">
          <div class="take-quiz valign-text-middle poppins-normal-white-25px">Take Quiz</div>
        </div>
      </button>
    </>
  );
};

export default TakeQuizButton;