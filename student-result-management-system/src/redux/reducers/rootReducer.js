import { combineReducers } from "redux";

const rootReducer = combineReducers({
  students: (state = {
    students: [],
    loading: false,
    error: null
  }) => state,

  auth: (state = {
    isAuthenticated: false,
    user: null
  }) => state
});

export default rootReducer;