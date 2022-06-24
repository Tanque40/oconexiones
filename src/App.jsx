// * React 
import React from "react";

// ? CSS
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/App.scss'

// ? Images
import bussines from './assets/images/business-intelligence-1-1280x853.jpg'
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

        <Header 
          target="uno"
          containerStyles="block"
          navStyles="pushpin"
        >
          <div className="">
            <span style={{color: "black"}}>Hola mundo</span>
          </div>
        </Header>

        <Header 
          target="dos"
          containerStyles="block"
          navStyles="pushpin"
        />
                    
      </>
    );
  }
}

export default App;
