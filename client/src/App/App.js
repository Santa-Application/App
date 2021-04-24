import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage, Login } from 'pages';
import { Footer, Header, Heading } from 'components';
import { RecruitPostList, RecruitPostDetail } from 'containers';
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
            path="/review"
            component={() => (
              <Heading content="REVIEW" className={pageHeading} />
            )}
          />
          <Route path="/login" exact component={Login} />
          <Switch></Switch>
        </main>
        <Route path="/" exact component={HomePage} />
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
