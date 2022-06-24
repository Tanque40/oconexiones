// * React 
import React from "react";

// ? CSS
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/App.scss'

// ? Images
import bussines from './assets/images/bussiness.jpg'
import logo from './assets/images/logo.PNG'

// * Materialize
import M from 'materialize-css'

// * Components
import Header from './components/navbar/component/header';



class App extends React.Component {

  componentDidMount() {
    /* Pushpin Initialization */
    var pushpins = document.querySelectorAll(".pushpin");
    pushpins.forEach(function(element) {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      //console.log("scrollTop: " + scrollTop);
      var elemRect = element.getBoundingClientRect();
      //console.log("elemRect: " + elemRect.height);
      var parentRect = element.parentElement.getBoundingClientRect();
      //console.log("parentRect: " + parentRect.height);
      var elemTop = scrollTop + elemRect.top;
      //console.log("elemTop: " + elemTop );
    
      var instancePushpin = M.Pushpin.init(element, {
        top: elemTop,
        bottom: elemTop + parentRect.height - elemRect.height
      });
    }) 
  }

  render(){
    return (
      <>

        <div className="block bg" id="uno">
          <nav className="pushpin" data-taget="uno">
            <div className="nav-wrapper transparent-bg-color" >

              <a className="brand-logo right">
                <img src={logo} alt="logo" className="responsive-img" />
              </a>

            </div>
          </nav>
          <div className="main">
            <div className="content">
              <span>O conexiones</span>
            </div>
          </div>
        </div>

        <div className="block" id="dos">
          <nav className="pushpin" data-taget="dos">
            <div className="nav-wrapper primary-background" >

              <a className="brand-logo right">
                <img src={logo} alt="logo" className="responsive-img" />
              </a>

            </div>
          </nav>
          <div className="valign-wrapper">
            <div className="">
              <span style={{color: "black"}}>Hola mundo</span>
            </div>
          </div>  
        </div>
        {/* <Header 
          target="uno"
          containerStyles="block"
          navStyles="pushpin"
        >
          <div className="">
            <span style={{color: "black"}}>Hola mundo</span>
          </div>
        </Header> */}

        {/* <Header 
          target="dos"
          containerStyles="block"
          navStyles="pushpin"
        />
        */}

      </> 
    );
  }
}

export default App;
