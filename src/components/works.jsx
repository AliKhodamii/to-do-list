import React, { Component } from "react";
import { useContext } from "react";
import Work from "./work";
import WorksContext from "../context/worksContext";

const Works = () => {
  const worksContext = useContext(WorksContext);
  return (
    <>
      <div className="container col-4 text-center">
        {worksContext.works.map((work, index) => (
          <Work key={index} workName={work.workName} />
        ))}
      </div>
    </>
  );
};

export default Works;
