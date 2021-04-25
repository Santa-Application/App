// reducer state
export const initialState = () => ({
  isLoading: false,
  data: null,
  error: null,
});

export const authInitialState = () => ({
  isLoading: false,
  userInfo: null,
  error: null, 
  signedIn: false,
  token: null
});

export const loadingState = previousState => ({
  isLoading: true,
  data: previousState,
  error: null,
});
export const errorState = error => ({
  isLoading: false,
  data: null,
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
  signedIn: false
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
    console.log(api);
    const payload = await api(...param);

    dispatch({ type, payload });
  } catch (e) {
    dispatch({ type: error, payload: e });
  }
};
