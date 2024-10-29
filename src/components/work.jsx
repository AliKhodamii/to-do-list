import React, { Component } from "react";

const Work = (props) => {
  return (
    <>
      <div class="card mb-2">
        <div class="card-body">{props.workName}</div>
      </div>
    </>
  );
};

export default Work;
