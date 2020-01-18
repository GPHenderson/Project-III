import React, { Component } from "react";
import { Link } from "react-router-dom";


class Navbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <h1>Greg's To Do List</h1>
        <nav className="z-depth-3">
        <div className="nav-wrapper white">
            <Link 
                to="/login"
                style={{
                  width: "140px",
                  borderRadius: "3px",
                  letterSpacing: "1.5px"
                }}
                className="col right waves-effect white black-text"
              
              >
                Log In
              </Link>
              
            
          </div>
          

        </nav>
      </div>
    );
  }
}

export default Navbar;