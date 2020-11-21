import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark container fixed-top">
            <a className="navbar-brand" href="#hello">Tsin Moua</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse fl" id="navbarNavDropdown">
                <ul className="navbar-nav ml-auto ">
                    <li className="nav-item">
                        <a className="nav-link" href="#about">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#projects">Projects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <nav className="navbar navbar-expand-lg navbar-light bg-light">
        //   <Link className="navbar-brand" to="/">
        //     Wikipedia Searcher
        //   </Link>
        //   <div>
        //     <ul className="navbar-nav">
        //       <li className="nav-item">
        //         <Link
        //           to="/"
        //           className={
        //             window.location.pathname === "/" || window.location.pathname === "/home"
        //               ? "nav-link active"
        //               : "nav-link"
        //           }
        //         >
        //           Home
        //         </Link>
        //       </li>
        //       <li className="nav-item">
        //         <Link
        //           to="/signup"
        //           className={window.location.pathname === "/signup" ? "nav-link active" : "nav-link"}
        //         >
        //           Sign Up
        //         </Link>
        //       </li>
        //     </ul>
        //   </div>
        // </nav>
    );
}

export default NavBar;
