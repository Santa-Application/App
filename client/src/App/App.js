import { Route, Switch, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import {
  HomePage,
  Login,
  Register,
  RecruitList,
  RecruitDetail,
  RecruitCreate,
  RecruitEdit,
  RegularList,
  RegularDetail,
  RegularCreate,
  RegularEdit,
} from 'pages';
import { Footer, Header } from 'components';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Route path="/" component={Header} />
        <Switch>
          <Route path="/recruit" exact component={RecruitList} />
          <Route path="/recruit/create" exact component={RecruitCreate} />
          <Route path="/recruit/:postId" exact component={RecruitDetail} />

          <Route path="/reviews" exact component={RegularList} />
          <Route path="/reviews/create" exact component={RegularCreate} />
          <Route path="/reviews/:postId" exact component={RegularDetail} />
        </Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/" exact component={HomePage} />

        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
