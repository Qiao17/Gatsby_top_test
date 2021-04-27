import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from '../images/logo.png';

const Header = ({ siteTitle }) => (
  <nav className="navbar is-transparent" 
    style={{ maxWidth: '960px', margin: '10px auto'}}>
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={logo} alt="aqua" style={{ width: '88px', margin: '0' }} />         
        </Link>
      </div>
    
      <div id="navMenu" className="navbar-end has-text-centered" >
        <Link className="navbar-item" to="/about">
          About us
        </Link>
        <Link className="navbar-item" to="/solutions">
          Solutions
        </Link>
        <Link className="navbar-item" to="/case">
          Case study
        </Link>
        <Link className="navbar-item" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
