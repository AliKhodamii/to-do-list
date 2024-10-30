import React, { Component } from "react";
const Navbar = () => {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://i.pinimg.com/564x/51/81/9c/51819c0566eb155d5f90f9d4967da4ee.jpg"
              alt="Logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            To-DO List
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
