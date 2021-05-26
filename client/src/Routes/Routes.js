import { Switch } from 'react-router-dom';

import { PublicRoute, PrivateRoute } from 'Routes';
import {
  HomePage,
  Login,
  Main,
  Mountain,
  PageNotFound,
  Profile,
  RecruitCreate,
  RecruitDetail,
  RecruitEdit,
  RecruitList,
  Register,
  RegularCreate,
  RegularDetail,
  RegularEdit,
  RegularList,
} from 'pages';

const Routes = () => (
  <Switch>
    <PublicRoute path="/login" exact restricted component={Login} />
    <PublicRoute path="/signup" exact restricted component={Register} />
    <PublicRoute path="/" exact restricted component={HomePage} />

    <PrivateRoute path="/main" exact component={Main} />

    <PrivateRoute path="/recruit" exact component={RecruitList} />
    <PrivateRoute path="/recruit/create" exact component={RecruitCreate} />
    <PrivateRoute path="/recruit/edit/:postId" exact component={RecruitEdit} />
    <PrivateRoute path="/recruit/:postId" exact component={RecruitDetail} />

    <PrivateRoute path="/reviews" exact component={RegularList} />
    <PrivateRoute path="/reviews/create" exact component={RegularCreate} />
    <PrivateRoute path="/reviews/edit/:postId" exact component={RegularEdit} />
    <PrivateRoute path="/reviews/:postId" exact component={RegularDetail} />

    <PrivateRoute path="/mountains" exact component={PageNotFound} />
    <PrivateRoute path="/mountains/:mountainName" component={Mountain} />

    <PrivateRoute path="/profile/:userName/edit" component={Register} />
    <PrivateRoute path="/profile/:userName" component={Profile} />
    <PrivateRoute path="/page-not-found" exact component={PageNotFound} />
  </Switch>
);

export default Routes;
