import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/home'>
          <Home/>
        </Route>
        <Route path='/about'>
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
