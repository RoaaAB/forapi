import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom"; // Import to navigate programmatically
import { TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate(); // Use the navigate function

  const handleSearch = useCallback(async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    const sanitizedQuery = searchQuery.trim().replace(/[\n\r]+/g, ''); // Clean the input

    if (sanitizedQuery === "") {
      if (onSearch) {
        onSearch([]); // Clear results
      }
      return;
    }

    try {
      const response = await fetch(`http://127.0.0.1:8000/process_query?query=${sanitizedQuery}`);
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();

      if (onSearch) {
        onSearch(data); // Optionally pass data to the parent component
      }

      // After fetching the results, navigate to the results page and pass the data
      navigate("/results", { state: { results: data.tools } });
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  }, [onSearch, navigate]); // Include navigate in the dependency

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
