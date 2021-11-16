// import './App.css';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';
// import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';

function App() {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/" component={Home} />
      </Switch>
    </ConnectedRouter>
  );
}

export default App;
