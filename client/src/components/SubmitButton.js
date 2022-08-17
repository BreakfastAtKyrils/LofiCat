import React from "react";

const SubmitButton = (props) => {
  return (
    <>
      <button
        type="button"
        class="overlap-group-container-1"
        onClick={props.onClick}
      >
        <div class="overlap-group-5">
          <div class="question valign-text-middle poppins-normal-black-25px">
            Submit your Answers!
          </div>
        </div>
      </button>
    </>
  );
};

export default SubmitButton;
