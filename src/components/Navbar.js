import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';
export const Navbar = (props) => {
  return (

    <nav id="navbar" className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" to="/about">{props.abouttext}</a>
            </li> */}
          </ul>     
          <div className="form-check form-switch  ">
            <input className="form-check-input" onClick={props.togglemode}type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label ${props.mode==='dark'?'text-light':'text-dark'}`}   >Change Mode</label>
          </div>
        </div>
      </div>
    </nav>

  )
};
Navbar.propTypes = { "title": PropTypes.string.isRequired };

Navbar.defaultProps = {
  title: "Text Analyzer"
}
