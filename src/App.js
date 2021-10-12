import { Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import './App.css';
import Home from './components/Home';
import Details from './components/Details';

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Provider>
);

export default App;
