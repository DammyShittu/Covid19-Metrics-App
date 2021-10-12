import { Route, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';
import Navbar from './components/Navbar';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Navbar />
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
  </Provider>
);

export default App;
