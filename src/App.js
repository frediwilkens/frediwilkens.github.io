import './Home.css';
import './About.css';
import './Projects.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';

function App() {
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/about' component={ About } />
        <Route exact path='/projects' component={ Projects } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
