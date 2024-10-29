import React, { Component } from "react";
import Add from "./components/add";
import Works from "./components/works";
import WorksContext from "./context/worksContext";

class App extends Component {
  state = {
    works: [
      { id: 1, workName: "HomeWork" },
      { id: 2, workName: "Book" },
      { id: 3, workName: "Study" },
    ],
  };
  render() {
    return (
      <>
        <WorksContext.Provider value={{ works: this.state.works }}>
          <Add />
          <Works />
        </WorksContext.Provider>
      </>
    );
  }
}

export default App;
