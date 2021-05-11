import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import AllProjects from './components/AllProject/AllProjects';
import Blog2 from './components/AllProject/Blog2/Blog2';

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
        <Route path='/contact'>
          <Contact/>
        </Route>
        <Route path='/blog'>
          <Blog2/>
        </Route>
        <Route path='/work'>
          <AllProjects/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
