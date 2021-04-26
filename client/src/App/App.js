import { useSelector } from 'react-redux';
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
  UserRecruitList,
} from 'pages';
import { Footer, Header } from 'components';

function App() {
  const signedIn = useSelector(state => state.auth.signedIn);

  return (
    <div className="App">
      <HelmetProvider>
        <Route path="/" component={Header} />

        <Switch>
          <Route
            path="/main"
            exact
            component={() => <div>메인페이지 와야함돠</div>}
          />

          <Route path="/recruit" exact component={RecruitList} />
          <Route path="/recruit/create" exact component={RecruitCreate} />
          <Route path="/recruit/edit/:postId" exact component={RecruitEdit} />
          <Route path="/recruit/:postId" exact component={RecruitDetail} />

          <Route path="/reviews" exact component={RegularList} />
          <Route path="/reviews/create" exact component={RegularCreate} />
          <Route path="/reviews/edit/:postId" exact component={RegularEdit} />
          <Route path="/reviews/:postId" exact component={RegularDetail} />

          <Route to="/:userName/recruit" component={UserRecruitList} />
        </Switch>

        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={Register} />
        <Route path="/" exact component={HomePage}>
          {signedIn ? <Redirect to="/main" /> : <HomePage />}
        </Route>

        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
