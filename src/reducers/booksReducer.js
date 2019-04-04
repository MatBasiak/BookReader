export default function reducer(
  state = {
    books: ['pusty'],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCHING_BOOKS":
      return { ...state, fetching: true };
    case "FETCHING_BOOKS_FULFILLED":
      return {
        ...state,
        fetching: false,
        fetched: true,
        books: action.payload
      };
    case "FETCHING_BOOKS_REJECTED":
      return { ...state, fetching: false, error: action.payload };
    default:
      return state;
  }
}
