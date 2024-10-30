import React, { Component } from "react";
import Add from "./components/add";
import Works from "./components/works";
import WorksContext from "./context/worksContext";
import Navbar from "./components/navbar";

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
        <WorksContext.Provider
          value={{
            works: this.state.works,
            onAdd: this.handleAdd,
            onDelete: this.handleDelete,
          }}
        >
          <Navbar />
          <Add />
          <Works />
        </WorksContext.Provider>
      </>
    );
  }

  handleAdd = (work) => {
    const newWorks = [...this.state.works];
    const length = Object.keys(newWorks).length;
    newWorks.push({ id: length + 1, workName: work.workName });
    this.setState({ works: newWorks });
  };
  handleDelete = (workName) => {
    console.log(workName);
    const newWorks = this.state.works.filter((w) => w.workName !== workName);
    this.setState({ works: newWorks });
  };
}

export default App;
