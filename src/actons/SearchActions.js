import { FETCH_SEARCH_RESULTS } from "./types";

const path = query => `https://api.tronalddump.io/search/quote?query=${query}`;

export const fetchSearchResults = query => {
  const requestUrl = path(query);

  return dispatch => {
    fetch(requestUrl)
      .then(response => response.json())
      .then(json => {
        const { _embedded } = json;
        const { quotes } = _embedded;

        const data = {
          results: quotes,
          userQuery: query
        };

        dispatch({
          type: FETCH_SEARCH_RESULTS,
          payload: data
        });
      });
  };
};
