import { reduxUtils } from 'utils';
import { profileAPI } from 'api';

// action type
const LOADING_PROFILE = 'profile/LOADING';
const ERROR_PROFILE = 'profile/ERROR';
const GET_PROFILE = 'profile/SUCCESS';
const MOVE_TO_ANOTHER_PAGE = 'profile/MOVEOUT';


// thunk action creator
export const getUserProfileAsync = user =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_PROFILE,
      type: GET_PROFILE,
      error: ERROR_PROFILE,
    },
    profileAPI.getProfile,
    [user]
  );

export const moveOutFromPage = () => ({
  type: MOVE_TO_ANOTHER_PAGE
});


// Reducer
const profileReducer = (state = reduxUtils.profileInitialState(), action) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case LOADING_PROFILE:
      return reduxUtils.authLoadingState(data);
    case ERROR_PROFILE:
      return reduxUtils.authErrorState(payload);
    case GET_PROFILE:
      return {
        isLoading: false,
        profile: payload.data,
        error: null,
      };
    case MOVE_TO_ANOTHER_PAGE:
      return {
        isLoading: false, 
        profile: null,
        error: null
      };
    default:
      return state;
  }
};

export default profileReducer;
