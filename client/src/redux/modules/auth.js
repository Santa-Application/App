import { reduxUtils } from 'utils';
import { authAPI } from 'api';

// action type
const LOADING_REGISTER_USER = 'register/LOADING';
const ERROR_REGISTER_USER = 'register/ERROR';
const CREATE_USER = 'register/SUCCESS';

const LOADING_SIGNIN_USER = 'signin/LOADING';
const ERROR_SIGNIN_USER = 'signin/ERROR';
const SIGNIN_USER = 'signin/SUCCESS';

const LOADING_SIGNOUT_USER = 'signout/LOADING';
const ERROR_SIGNOUT_USER = 'signout/ERROR';
const SIGNOUT_USER = 'signout/SUCCESS';

// thunk action creator
export const registerNewUserAsync = newUser =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_REGISTER_USER,
      type: CREATE_USER,
      error: ERROR_REGISTER_USER,
    },
    authAPI.register,
    [newUser]
  );

export const signinUserAsync = () =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_SIGNIN_USER,
      type: SIGNIN_USER,
      error: ERROR_SIGNIN_USER,
    },
    authAPI.signin
  );

export const signoutUserAsync = () =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_SIGNOUT_USER,
      type: SIGNOUT_USER,
      error: ERROR_SIGNOUT_USER,
    },
    authAPI.signout
  );

// Reducer
const authReducer = (state = reduxUtils.authInitialState(), action) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case LOADING_REGISTER_USER:
    case LOADING_SIGNIN_USER:
    case LOADING_SIGNOUT_USER:
      return reduxUtils.authLoadingState(data);
    case ERROR_REGISTER_USER:
    case ERROR_SIGNIN_USER:
    case ERROR_SIGNOUT_USER:
      return reduxUtils.authErrorState(payload);
    case CREATE_USER:
    case SIGNIN_USER:
      return {
        isLoading: false,
        token: payload.headers['auth-token'],
        userInfo: payload.data,
        signedIn: true,
        error: null,
      };
    case SIGNOUT_USER:
      return {
        isLoading: false,
        token: null,
        userInfo: null,
        signedIn: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
