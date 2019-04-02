import axios from "axios";
const URL = `https://www.googleapis.com/books/v1/volumes?q=it&maxResults=6`;
export function booksList() {
  
    const request = axios.get(URL).then(response => response.data);

  return {
    type: "FETCHING_BOOKS",
    payload: request
  };
}
