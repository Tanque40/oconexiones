// ? CSS
import 'materialize-css/dist/css/materialize.min.css'
import './assets/css/App.scss'

// ? Images
import bussines from './assets/images/business-intelligence-1-1280x853.jpg'

// * Components
import Header from './navbar/component/header';

function App() {
  return (
    <>
      <Header />
      <div> Hello Oconexiones </div>
      <img src={bussines} />
    </>
  );
}

export default App;
