import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiAlignRight } from 'react-icons/fi';
import logo from '../images/logo.png';

class Navbar extends Component {

  state = {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="furever friends logo" width="50px" />
            </Link>
            <button className="nav-btn" onClick={this.handleToggle}>
              <FiAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">home</Link>
            </li>
            <li>
              <Link to="/dogs">adopt</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/volunteer">volunteer</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
