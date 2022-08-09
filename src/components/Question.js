import React from "react";
import PossibleAnswer from "./PossibleAnswer";

const Question = function () {
  return (
    <>
      <nav>
        <div>Question will be linked here</div>
        <div> ____ </div>
        <div>question_type can be either multiple choice or true.false</div>
        <div> ____ </div>
        <div>
          potential answers will appear here. There will either be 4 multiple
          choice buttons or two true/false buttons
        </div>
        <div> ____ </div>
        <div>Submit button will go here, it will also update the database</div>
      </nav>
      <PossibleAnswer possibleA="Possible Answer 1" />
    </>
  );
};

export default Question;
