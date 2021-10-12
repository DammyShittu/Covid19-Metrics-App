import { Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <div className="App">
    <Switch>
      <Route path="/details">
        <Details />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    <Link to="/details">Details</Link>
  </div>
);

export default App;
