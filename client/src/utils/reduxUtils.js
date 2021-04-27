// reducer state
export const initialState = () => ({
  isLoading: false,
  data: [],
  error: null,
});

export const authInitialState = () => ({
  isLoading: false,
  userInfo: null,
  error: null,
  signedIn: false,
  token: null,
});

export const profileInitialState = () => ({
  isLoading: false,
  profile: null,
  error: null,
});

export const loadingState = previousState => ({
  isLoading: true,
  data: previousState,
  error: null,
});

export const errorState = error => ({
  isLoading: false,
  data: [],
  error,
});

export const authLoadingState = previousState => ({
  isLoading: false,
  userInfo: previousState,
  error: null,
  signedIn: false,
});

export const authErrorState = error => ({
  isLoading: false,
  userInfo: null,
  error,
  signedIn: false,
});

export const profileLoadingState = previousState => ({
  isLoading: true,
  profile: previousState,
  error: null,
});

export const profileErrorState = error => ({
  isLoading: false,
  profile: null,
  error,
});

// create thunk action creator
export const createThunkActionCreator = (
  actionType = {},
  api,
  param = []
) => async dispatch => {
  const { loading, type, error } = actionType;
  dispatch({ type: loading });

  try {
    const payload = await api(...param);

    dispatch({ type, payload });

    return payload;
  } catch (e) {
    dispatch({ type: error, payload: e });
  }
};
