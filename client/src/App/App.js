import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  HomePage,
  Register
} from 'pages';
import {
  Header
} from 'components'; 

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </HelmetProvider>
    </div>
  );
}

export default App;
