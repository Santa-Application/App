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
  Profile,
  PageNotFound,
  Mountain,
  Main,
} from 'pages';
import { Footer, Header } from 'components';

function App() {
  const signedIn = useSelector(state => state.auth.signedIn);

  return (
    <div className="App">
      <HelmetProvider>
        <Route path="/" component={Header} />

        <Switch>
          <Route path="/main" exact component={Main} />
          <Route path="/mountain/:name" exact component={Mountain} />

          <Route path="/recruit" exact component={RecruitList} />
          <Route path="/recruit/create" exact component={RecruitCreate} />
          <Route path="/recruit/edit/:postId" exact component={RecruitEdit} />
          <Route path="/recruit/:postId" exact component={RecruitDetail} />

          <Route path="/reviews" exact component={RegularList} />
          <Route path="/reviews/create" exact component={RegularCreate} />
          <Route path="/reviews/edit/:postId" exact component={RegularEdit} />
          <Route path="/reviews/:postId" exact component={RegularDetail} />

          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />

          <Route path="/:userName" component={Profile} />

          {/* {signedIn && <Redirect from="/" to="/main" />} */}
          <Route path="/" exact component={HomePage} />

          {/* <Redirect to="/page-not-found" /> */}
          {/* todo: 에러 해결 */}
          {/* <Route path="/page-not-found" component={PageNotFound}>
            <Redirect to="/page-not-found" />
          </Route> */}
        </Switch>

        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
