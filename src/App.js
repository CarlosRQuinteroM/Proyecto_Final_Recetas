import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home.jsx';
import './App.css';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>

      <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
