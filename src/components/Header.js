import React from "react";

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Todo List
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
           
            
          </ul>
          <ul className='navbar-nav'>
          <li className="nav-item align-self-end border rounded" onClick={props.toggle}>
              <a className="nav-link" href="#">
                Toggle Mode
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
