import React, { Component, useState, useContext } from "react";
import WorksContext from "../context/worksContext";
const Add = () => {
  const [work, setWork] = useState([{ work: "" }]);
  const worksContext = useContext(WorksContext);

  function updateInputValue(evt) {
    const val = evt.target.value;
    setWork({
      workName: val,
    });
  }

  return (
    <>
      <div className="container text-center col-4 mt-3">
        <div className="input-group mb-3 ">
          <input
            type="text"
            className="form-control p-2"
            placeholder="Work To Do"
            aria-label="Work To DO"
            aria-describedby="button-addon2"
            onChange={(evt) => updateInputValue(evt)}
          />
          <button
            className="btn  btn-outline-primary p-20"
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

  function handleAdd() {
    worksContext.onAdd(work);
  }
};
export default Add;
