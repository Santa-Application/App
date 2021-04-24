import { Switch, Route, Redirect } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HomePage, GlobalRecruitPost, GlobalRegularPost } from 'pages';
import {
  Footer,
  Header,
  Heading,
  RecruitPostDetail,
  RecruitPostList,
} from 'components';

function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <Header />
        <main>
          <Route
            path="/recruit"
            component={() => <Heading content="RECRUIT" />}
          />
          <Route path="/recruit" exact component={RecruitPostList} />
          <Route path="/recruit/:postId" exact component={RecruitPostDetail} />
          <Route
            path="/review"
            component={() => <Heading content="REVIEW" />}
          />
          {/* <Route path="/review" exact component={GlobalRegularPostList} />
            <Route
            path="/review/edit"
            exact
            component={GlobalRegularPostEdit}
            />
            <Route
            path="/review/create"
            exact
            component={GlobalRegularPostCreate}
            />
            <Route
            path="/recruit/:postId"
            exact
            component={GlobalRecruitPostDetail}
            />
            <Route
            path="/review/:postId"
            exact
            component={GlobalRegularPostDetail}
          /> */}
          <Route path="/" exact component={HomePage} />
          <Switch></Switch>
        </main>
        <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
