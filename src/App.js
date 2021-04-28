import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <Router>
      <Switch>
        <Route to='/'>
          <Home/>
        </Route>
        <Route to='/home'>
          <Home/>
        </Route>
        <Route to='/about'>
          <About/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
