import axios from "axios";
const URL = `https://www.googleapis.com/books/v1/volumes?`;

export function booksList(key) {
  return function(dispatch) {
    dispatch({ type: "FETCHING_BOOKS" });
    axios
      .get(`${URL}q=${key}&maxResults=10`)
      .then(response => {
        dispatch({ type: "FETCHING_BOOKS_FULFILLED", payload: response.data });
      })
      .catch(e => {
        dispatch({ type: "FETCHING_BOOKS_REJECTED", payload: e });
      });
  };
}
