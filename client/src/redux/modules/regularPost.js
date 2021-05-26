import { regularPostAPI } from 'api';
import { reduxUtils } from 'utils';

// action type
export const INITIALIZE_REGULAR_POST = 'regular/INITIALIZE_POST';
const LOADING_REGULAR_POST = 'regular/LOADING_POST';
const ERROR_REGULAR_POST = 'regular/ERROR_POST';
const GET_REGULAR_POSTS = 'regular/GET_POSTS';
const CREATE_REGULAR_POST = 'regular/CREATE_POST';
const UPDATE_REGULAR_POST = 'regular/UPDATE_POST';
const REMOVE_REGULAR_POST = 'regular/REMOVE_POST';

// thunk action creator
export const getRegularPostsAsync = () =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_REGULAR_POST,
      type: GET_REGULAR_POSTS,
      error: ERROR_REGULAR_POST,
    },
    regularPostAPI.getAllRegularPosts
  );
export const createRegularPostAsync = newPost =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_REGULAR_POST,
      type: CREATE_REGULAR_POST,
      error: ERROR_REGULAR_POST,
    },
    regularPostAPI.createRegularPost,
    [newPost]
  );
export const updateRegularPostAsync = (postId, updatePost) =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_REGULAR_POST,
      type: UPDATE_REGULAR_POST,
      error: ERROR_REGULAR_POST,
    },
    regularPostAPI.updateRegularPost,
    [postId, updatePost]
  );
export const removeRegularPostAsync = id =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_REGULAR_POST,
      type: REMOVE_REGULAR_POST,
      error: ERROR_REGULAR_POST,
    },
    regularPostAPI.removeRegularPost,
    [id]
  );

// reducer
const regularPostReducer = (state = reduxUtils.initialState(), action) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case INITIALIZE_REGULAR_POST:
      return reduxUtils.initialState();
    case LOADING_REGULAR_POST:
      return reduxUtils.loadingState(data);
    case ERROR_REGULAR_POST:
      return reduxUtils.errorState(payload);
    case GET_REGULAR_POSTS:
      return {
        isLoading: false,
        data: payload,
        error: null,
      };
    case CREATE_REGULAR_POST:
      return {
        isLoading: false,
        data: [...data, payload],
        error: null,
      };
    case UPDATE_REGULAR_POST:
      return {
        isLoading: false,
        data: data.map(post => (post.id === payload.id ? payload : post)),
        error: null,
      };
    case REMOVE_REGULAR_POST:
      return {
        isLoading: false,
        data: data.filter(post => post.id !== payload),
        error: null,
      };
    default:
      return state;
  }
};

export default regularPostReducer;
