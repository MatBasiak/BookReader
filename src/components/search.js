import React from "react";
import {DebounceInput} from 'react-debounce-input'


const Search = props => {
  return (
    <div className="search_container">
      <h2> Podaj tytuł Ksiązki</h2>
      {/* <input type="text" onChange={event => props.keywords(event.target.value)} /> */}
      <DebounceInput minLength={2}
      debounceTimeout={700}
        onChange={event => props.keywords(event)} />
    </div>
  );
};

export default Search;
