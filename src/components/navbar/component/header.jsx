// * React 
import React from "react";

// ? images
import logo from '../../../assets/images/logo.PNG'

// * Materialize
import M from 'materialize-css'
import 'materialize-css/dist/css/materialize.min.css'


class Header extends React.Component {

  componentDidMount() {
    
  }

  render() {
    return (
      <div className={this.props.containerStyles} id={this.props.target}>
        <nav className={this.props.navStyles} data-taget={this.props.target}>
          <div className="nav-wrapper primary-background" >

            <a className="brand-logo right">
              <img src={logo} alt="logo" className="responsive-img" />
            </a>

          </div>
        </nav>
        <div className="valign-wrapper">
          {this.props.children} 
        </div>  
      </div>
    );
  }
}

export default Header;
