import React, { Component } from "react";
const Add = () => {
  return (
    <>
      <div className="container text-center col-4 mt-3">
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control"
            placeholder="Work To Do"
            aria-label="Work To DO"
            aria-describedby="button-addon2"
          />
          <button
            className="btn  btn-outline-primary"
            type="button"
            id="button-addon2"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );

  function handleAdd() {}
};
export default Add;
