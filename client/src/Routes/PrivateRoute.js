import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...restProps }) => {
  const isLoggedIn = useSelector(state => state.auth.signedIn);
  return (
    <Route
      {...restProps}
      render={props =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
