import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage, Login, Register } from 'pages';
import { Footer, Header, Heading } from 'components';
import {
  RecruitPostList,
  RecruitPostDetail,
  RegularPostList,
  RegularPostDetail,
} from 'containers';
import { pageHeading } from './App.module.scss';


function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Route path="/" component={Header} />
        <main>
          <Route
            path="/recruit"
            component={() => (
              <Heading content="RECRUIT" className={pageHeading} />
            )}
          />
          <Route path="/recruit" exact component={RecruitPostList} />
          <Route path="/recruit/:postId" exact component={RecruitPostDetail} />

          <Route
            path="/reviews"
            component={() => (
              <Heading content="REVIEWS" className={pageHeading} />
            )}
          />
          <Route path="/reviews" exact component={RegularPostList} />
          <Route path="/reviews/:postId" exact component={RegularPostDetail} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Register} />
          <Switch></Switch>
        </main>
        <Route path="/" exact component={HomePage} />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
