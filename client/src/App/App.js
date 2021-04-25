import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  HomePage,
  Register,
  Login
} from 'pages';


function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/register" exact component={Register} />
          <Route paht="/login" exact component={Login} /> 
        </Switch>
      </HelmetProvider>
    </div>
  );
}

export default App;
