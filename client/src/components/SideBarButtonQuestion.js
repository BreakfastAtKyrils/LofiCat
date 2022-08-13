import React from "react";

const SideBarButtonQuestion = (props) => {
  return (
    <>
      <button type="button" class="overlap-group1" onClick={props.onClick}>
              <div class="question valign-text-middle poppins-normal-black-25px">{props.questionNumber}</div>
      </button>
    </>
  );
};

export default SideBarButtonQuestion;