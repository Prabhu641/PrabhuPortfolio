import React from "react";
import { Link } from "react-router-dom";
import '../styless.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container-fluid mx-5">
                <Link className="navbar-brand text-info" to="/">DevPrabhu</Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" 
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item">
                            <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/project">Project</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/certificates">Certificates</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white" to="/contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;