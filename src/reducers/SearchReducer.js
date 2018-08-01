import { FETCH_SEARCH_RESULTS } from "../actons/types";

const INITIAL_STATE = {
  results: [],
  userQuery: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_SEARCH_RESULTS:
      return action.payload;

    default:
      return state;
  }
};
