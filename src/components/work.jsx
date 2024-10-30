import React, { Component, useContext } from "react";
import WorksContext from "../context/worksContext";
const Work = (props) => {
  const worksContext = useContext(WorksContext);
  return (
    <>
      <div className="container mt-4">
        <div className="d-flex justify-content-between">
          <div className="card flex-fill me-2 ">
            <div className="card-body">
              <h5>{props.workName}</h5>
            </div>
          </div>
          <button className="btn btn-outline-danger" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  );

  function handleDelete() {
    worksContext.onDelete(props.workName);
  }
};

export default Work;
