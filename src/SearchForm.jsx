import React from "react";
import { useGlobalContext } from "./context";

function SearchForm() {
  const { setSearchTerm } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchTerm = e.target.elements.search.value;

    if (!searchTerm) {
      return;
    }
    setSearchTerm(searchTerm);
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit}>
        <input type='search' name='search' placeholder='flowers' />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
}

export default SearchForm;
