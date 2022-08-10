import React from "react";
import PossibleAnswer from "./PossibleAnswer";

const questionData = {
  0: {
    Question: "Where is lighthouse Labs Located?",
    PotentialAnswer: [
      "Possible Answer 1",
      "Possible Answer 2",
      "Possible Answer 3",
      "Possible Answer 4",
    ],
    CorrectAnswer: 2,
  },
  1: {
    Question: "Q2: Where is lighthouse Labs Located?",
    PotentialAnswer: [
      "Possible Answer 1",
      "Possible Answer 2",
      "Possible Answer 3",
      "Possible Answer 4",
    ],
    CorrectAnswer: 2,
  },
  2: {
    Question: "Q3: Where is lighthouse Labs Located?",
    PotentialAnswer: ["True", "False"],
    CorrectAnswer: 2,
  },
  3: {
    Question: "Q4: Where is lighthouse Labs Located?",
    PotentialAnswer: [
      "Possible Answer 1",
      "Possible Answer 2",
      "Possible Answer 3",
      "Possible Answer 4",
    ],
    CorrectAnswer: 2,
  },
  4: {
    Question: "Where is lighthouse Labs Located?",
    PotentialAnswer: [
      "Possible Answer 1",
      "Possible Answer 2",
      "Possible Answer 3",
      "Possible Answer 4",
    ],
    CorrectAnswer: 2,
  },
  5: {
    Question: "Where is lighthouse Labs Located?",
    PotentialAnswer: [
      "Possible Answer 1",
      "Possible Answer 2",
      "Possible Answer 3",
      "Possible Answer 4",
    ],
    CorrectAnswer: 2,
  },
};

const Question = () => {
  return (
    <>
      <nav>
        <div>{questionData[3].Question}</div>
        <div> ____ </div>
        <div>{"question_type can be either multiple choice or true.false"}</div>
        <div> ____ </div>
      </nav>
      <PossibleAnswer possibleA={questionData[3].PotentialAnswer[0]} />
      <PossibleAnswer possibleA="Possible Answer 2" />
      <PossibleAnswer possibleA="Possible Answer 3" />
      <PossibleAnswer possibleA="Possible Answer 4" />
      <div> ____ </div>
      <div>Submit button will go here, it will also update the database</div>
      <div> ____ </div>
      <div>
        'Next Question' button will go here, it will also update the database
      </div>
    </>
  );
};

export default Question;
