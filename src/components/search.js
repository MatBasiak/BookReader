import React from "react";
import { DebounceInput } from "react-debounce-input";

const Search = props => {
  return (
    <div className="search_container">
      <h2> Podaj tytuł Ksiązki</h2>
      <DebounceInput
      className={"input"}
        minLength={2}
        debounceTimeout={700}
        onChange={event => props.keywords(event)}
        value=""
      />
    </div>
  );
};

export default Search;
