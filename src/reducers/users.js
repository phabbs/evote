import * as type from '../type';

const initialState = {
  users: [8],
  loading: false,
  loaded: false,
  error: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.USERS_GET_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
        error: false,
      };
    default:
      return state;
  }
};

export default reducer;
