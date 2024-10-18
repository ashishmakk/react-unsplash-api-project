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
      <h1 className="heading">Unsplash API Project</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-fields">
        <input type='search' name='search' placeholder='flowers' className="form-input" />
        <button type='submit' className="btn">Search</button>
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
