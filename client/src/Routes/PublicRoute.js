import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PublicRoute = ({ component: Component, restricted, ...restProps }) => {
  const isLoggedIn = useSelector(state => state.auth.signedIn);
  return (
    <Route
      {...restProps}
      render={props =>
        isLoggedIn && restricted ? (
          <Redirect to="/main" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
