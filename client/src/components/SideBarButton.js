import React from "react";

const SideBarButton = (props) => {
  return (
    <>
      <button type="button" class="group-16" onClick={props.onClick}>
        <div class="overlap-group">
          <img class="ellipse-3" src="img/ellipse-3@2x.svg" />
          <div class="number valign-text-middle poppins-normal-white-30px">{props.chapter_number}</div>
        </div>
        <div class="loops valign-text-middle">{props.title}</div>
      </button>
    </>
  );
};

export default SideBarButton;
