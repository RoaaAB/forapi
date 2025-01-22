import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, InputAdornment, IconButton, CircularProgress } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSearch = useCallback(async (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);

    const sanitizedQuery = searchQuery.trim().toLowerCase();

    if (sanitizedQuery === "") {
      if (onSearch) {
        onSearch([]);
      }
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`http://127.0.0.1:8000/process_query?query=${encodeURIComponent(sanitizedQuery)}`);
      
      if (!response.ok) {
        throw new Error("Failed to fetch search results");
      }

      const data = await response.json();
      
      // Check if there are any errors in the data
      if (data.error) {
        throw new Error(data.error);
      }

      if (onSearch) {
        onSearch(data.tools || []);
      }

      // Navigate to results page with the fetched data
      navigate("/results", { state: { results: data.tools || [] } });
    } catch (error) {
      console.error("Error fetching search results:", error);
      // Optionally, you could display an error message to the user here
    } finally {
      setLoading(false);
    }
  }, [onSearch, navigate]);

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
              <IconButton type="submit" aria-label="search" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </form>
  );
};

export default Search;

