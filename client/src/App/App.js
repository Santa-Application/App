import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  HomePage
} from 'pages';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </HelmetProvider>
    </div>
  );
}

export default App;
