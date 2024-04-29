import React, { useState } from 'react';

// This component represents the search bar that allows the user to search for transactions
const SearchBar = ({ onSearch }) => {
  // Declare a state variable to hold the search query
  const [searchQuery, setSearchQuery] = useState('');

  // This function is called when the user enters a new search query
  const handleSearch = (e) => {
    // Get the value of the input element
    const query = e.target.value;

    // Update the state with the new search query
    setSearchQuery(query);

    // Call the onSearch function with the new search query
    onSearch(query);
  };

  return (
    // Render an input element with the type="text", a placeholder, the current search query, and an onChange event that calls the handleSearch function
    <input
      type="text"
      placeholder="Search transactions"
      value={searchQuery}
      onChange={handleSearch}
    />
  );
};

export default SearchBar;