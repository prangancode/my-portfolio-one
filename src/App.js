import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProjectDetails from './components/ProjectDetails';



function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path="/projectDetails/:projectid">
          <ProjectDetails></ProjectDetails>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;