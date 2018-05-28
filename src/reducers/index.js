import { combineReducers } from 'redux';
import usersReducer from './users';

const reducer = combineReducers({
  usersReducer,
});

export default reducer;
