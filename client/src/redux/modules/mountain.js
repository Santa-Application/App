import { mountainAPI } from 'api';
import { reduxUtils } from 'utils';

// action type
const LOADING_MOUNTAIN = 'mountain/LOADING_MOUNTAIN';
const ERROR_MOUNTAIN = 'mountain/ERROR_MOUNTAIN';
const GET_MOUNTAINS = 'mountain/GET_MOUNTAINS';

// thunk action creator
export const getMountainAsync = () =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_MOUNTAIN,
      type: GET_MOUNTAINS,
      error: ERROR_MOUNTAIN,
    },
    mountainAPI.getAllMountains
  );

export const getMountainByNameAsync = name =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_MOUNTAIN,
      type: GET_MOUNTAINS,
      error: ERROR_MOUNTAIN,
    },
    mountainAPI.getMountainByName(name)
  );

// reducer
const mountainReducer = (state = reduxUtils.initialState(), action) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case LOADING_MOUNTAIN:
      return reduxUtils.loadingState(data);
    case ERROR_MOUNTAIN:
      return reduxUtils.errorState(payload);
    case GET_MOUNTAINS:
      return {
        isLoading: false,
        data: payload,
        error: null,
      };
    default:
      return state;
  }
};

export default mountainReducer;
