import React from "react";

const StudyContent = (props) => {
  return (
    <>
      <div class="overlap-group2">
            <div class="group-container">
              <div class="group-14">
                <div class="rectangle-10"></div>
              </div>
              <div class="overlap-group-2">
                <div class="chapter-1-loops-for-loops valign-text-middle poppins-normal-white-40px">
                  <span>
                    <span class="poppins-normal-white-40px">{props.chapter_number} </span>
                    <span class="span1">{props.title}</span>
                  </span>
                </div>
              </div>
            </div>
            <div class="this-text-is-about-l poppins-normal-black-25px">
            {props.text}
            </div>
          </div>
    </>
  );
};

export default StudyContent;
