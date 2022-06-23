// * React 
import React from "react";

// ? images
import logo from '../../../assets/images/logo.PNG'

class Header extends React.Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper primary-background">

          <a href="#" className="brand-logo right">
            <img src={logo} alt="logo" className="responsive-img" />
          </a>

        </div>
      </nav>   
    );
  }
}

export default Header;
