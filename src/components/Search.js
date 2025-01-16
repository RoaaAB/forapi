import React, { useState, useCallback } from "react";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  // Memoize the handleSearch function to prevent unnecessary re-renders
  const handleSearch = useCallback(async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    // Input Validation: Remove unwanted characters (e.g., newlines)
    const sanitizedQuery = searchQuery.trim().replace(/[\n\r]+/g, ''); // Remove newlines and trim extra spaces

    // Check if the sanitized query is empty
    if (sanitizedQuery === "") {
      // Handle empty query (e.g., clear results or display a message)
      if (onSearch) {
        onSearch([]);  // Pass an empty array to clear results
      }
      return;  // Prevent further API request
    }

    try {
      // Fetch the data from the API with the sanitized query
      const response = await fetch(`http://127.0.0.1:8002/process_query?query=${sanitizedQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch search results');
      }

      // Parse the response as JSON
      const data = await response.json();
      // Pass the fetched results to the parent component via onSearch
      if (onSearch) {
        onSearch(data);
      }
    } catch (error) {
      // Log any errors during the fetch
      console.error("Error fetching search results:", error);
    }
  }, [onSearch]); // Ensure onSearch is included in the dependencies

  return (
    <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", alignItems: "center" }}>
      <TextField
        label="Search"
        variant="outlined"
        value={query}
        onChange={handleSearch}
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit" aria-label="search">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Search;
