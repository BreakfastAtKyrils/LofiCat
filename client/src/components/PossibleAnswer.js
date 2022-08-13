import React from "react";

const PossibleAnswer = (props) => {
  return (
    <button type="button" class="overlap-group2" onClick={props.onClick}>
      <div class="while-true valign-text-middle poppins-normal-white-25px">
        {props.text}
      </div>
      <div class="overlap-group">
        <img class="ellipse-3" src="img/ellipse-3-5@2x.svg" />
        <div class="a valign-text-middle poppins-normal-white-30px">
          {props.letter}
        </div>
      </div>
    </button>
  );
};

export default PossibleAnswer;
