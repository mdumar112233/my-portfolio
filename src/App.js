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
import Blog from './components/Blog/Blog';
import Projects from './components/Projects/Projects';

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
          <Blog/>
        </Route>
        <Route path='/work'>
          <Projects/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
