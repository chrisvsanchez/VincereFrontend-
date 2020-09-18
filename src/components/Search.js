import React from "react";

const Search = (props) => {
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={props.handleSearch} className="prompt" name="search" />
        <i className="search icon" />
      </div>
    </div>
  );
};
export default Search;
