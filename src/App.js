import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Containers/Home/Home';
import './App.css';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';
import Explore from './Containers/Explore/Explore';
import Login from './Containers/Login/Login';
require('dotenv').config()

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/explore" exact component={Explore}/>
        <Route path="/login" exact component={Login}/>
        </Switch>
      <Footer/>
      
      </BrowserRouter>

    </div>
  );
}

export default App;
