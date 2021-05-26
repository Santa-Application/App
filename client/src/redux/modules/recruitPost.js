import { recruitPostAPI } from 'api';
import { reduxUtils } from 'utils';

// action type
export const INITIALIZE_RECRUIT_POST = 'recruit/INITIALIZE_POST';
const LOADING_RECRUIT_POST = 'recruit/LOADING_POST';
const ERROR_RECRUIT_POST = 'recruit/ERROR_POST';
const GET_RECRUIT_POSTS = 'recruit/GET_POSTS';
const CREATE_RECRUIT_POST = 'recruit/CREATE_POST';
const UPDATE_RECRUIT_POST = 'recruit/UPDATE_POST';
const REMOVE_RECRUIT_POST = 'recruit/REMOVE_POST';
const TOGGLE_APPLY_RECRUITING = 'recruit/TOGGLE_APPLY_RECRUITING';

// thunk action creator
export const getRecruitPostsAsync = () =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_RECRUIT_POST,
      type: GET_RECRUIT_POSTS,
      error: ERROR_RECRUIT_POST,
    },
    recruitPostAPI.getAllRecruitPosts
  );
export const createRecruitPostAsync = newPost =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_RECRUIT_POST,
      type: CREATE_RECRUIT_POST,
      error: ERROR_RECRUIT_POST,
    },
    recruitPostAPI.createRecruitPost,
    [newPost]
  );
export const updateRecruitPostAsync = (postId, updatePost) =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_RECRUIT_POST,
      type: UPDATE_RECRUIT_POST,
      error: ERROR_RECRUIT_POST,
    },
    recruitPostAPI.updateRecruitPost,
    [postId, updatePost]
  );
export const removeRecruitPostAsync = postId =>
  reduxUtils.createThunkActionCreator(
    {
      loading: LOADING_RECRUIT_POST,
      type: REMOVE_RECRUIT_POST,
      error: ERROR_RECRUIT_POST,
    },
    recruitPostAPI.removeRecruitPost,
    [postId]
  );
// 모집 신청 성크 액션(신청한 유져 데이터 바뀌게 서버 api 수정 필요), thunk creator를 활용한 성크 액션 함수 에러 해결해야함
// export const toggleApplyRecruitingAsync = (postId, applicantId) => {
//   reduxUtils.createThunkActionCreator(
//     {
//       loading: LOADING_RECRUIT_POST,
//       type: TOGGLE_APPLY_RECRUITING,
//       error: ERROR_RECRUIT_POST,
//     },
//     recruitPostAPI.toggleApplyRecruiting,
//     [postId, applicantId]
//   );
// };
export const toggleApplyRecruitingAsync = (
  postId,
  applicantId
) => async dispatch => {
  dispatch({ type: LOADING_RECRUIT_POST });

  try {
    const payload = await recruitPostAPI.toggleApplyRecruiting(
      postId,
      applicantId
    );

    dispatch({ type: TOGGLE_APPLY_RECRUITING, payload });
  } catch (e) {
    dispatch({ type: ERROR_RECRUIT_POST, payload: e });
  }
};
/*
export const getRecruitPostsAsync = () => async dispatch => {
  dispatch({ type: LOADING_RECRUIT_POST });

  try {
    const payload = await recruitPostAPI.getAllRecruitPosts();

    dispatch({ type: GET_RECRUIT_POSTS, payload });
  } catch (e) {
    dispatch({ type: ERROR_RECRUIT_POST, payload: e });
  }
};
export const createRecruitPost = newPost => async dispatch => {
  dispatch({ type: LOADING_RECRUIT_POST });

  try {
    const payload = await recruitPostAPI.createRecruitPost(newPost);

    dispatch({ type: CREATE_RECRUIT_POST, payload });
  } catch (e) {
    dispatch({ type: ERROR_RECRUIT_POST, payload: e });
  }
};
export const updateRecruitPost = (id, updatePost) => async dispatch => {
  dispatch({ type: LOADING_RECRUIT_POST });

  try {
    const payload = await recruitPostAPI.updateRecruitPost(id, updatePost);

    dispatch({ type: UPDATE_RECRUIT_POST, payload });
  } catch (e) {
    dispatch({ type: ERROR_RECRUIT_POST, payload: e });
  }
};
export const removeRecruitPost = id => async dispatch => {
  dispatch({ type: LOADING_RECRUIT_POST });

  try {
    const payload = await recruitPostAPI.removeRecruitPost(id);

    dispatch({ type: REMOVE_RECRUIT_POST, payload });
  } catch (e) {
    dispatch({ type: ERROR_RECRUIT_POST, payload: e });
  }
};
*/

// reducer
const recruitPostReducer = (state = reduxUtils.initialState(), action) => {
  const { type, payload } = action;
  const { data } = state;

  switch (type) {
    case INITIALIZE_RECRUIT_POST:
      return reduxUtils.initialState();
    case LOADING_RECRUIT_POST:
      return reduxUtils.loadingState(data);
    case ERROR_RECRUIT_POST:
      return reduxUtils.errorState(payload);
    case GET_RECRUIT_POSTS:
      return {
        isLoading: false,
        data: payload,
        error: null,
      };
    case CREATE_RECRUIT_POST:
      return {
        isLoading: false,
        data: [...data, payload],
        error: null,
      };
    case UPDATE_RECRUIT_POST:
    case TOGGLE_APPLY_RECRUITING:
      return {
        isLoading: false,
        data: data.map(post =>
          post.recruitPost._id === payload.recruitPost._id ? payload : post
        ),
        error: null,
      };
    case REMOVE_RECRUIT_POST:
      return {
        isLoading: false,
        data: data.filter(post => post.recruitPost._id !== payload),
        error: null,
      };
    default:
      return state;
  }
};

export default recruitPostReducer;
