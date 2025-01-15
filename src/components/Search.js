import React, { useState } from 'react';
import { Box, InputBase, Button, Grid, Typography, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'; // Optional icon for search

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredTools, setFilteredTools] = useState([]);
  
  // Example data - replace with actual tool data
  const toolsData = [
    { id: 1, name: 'Tool A', category: 'Research' },
    { id: 2, name: 'Tool B', category: 'Writing' },
    { id: 3, name: 'Tool C', category: 'Data Analysis' },
    // Your actual tools data here
  ];

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle the search function
  const handleSearch = () => {
    const filtered = toolsData.filter((tool) =>
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredTools(filtered);
  };

  return (
    <div style={{ backgroundColor: '#E8F5E9', minHeight: '100vh' }}>
      <Container sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ textAlign: 'center' }}>
          Search Tools
        </Typography>
        
        {/* Search Section */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <InputBase
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search by tool name or category"
            sx={{
              flex: 1,
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              marginRight: 2,
            }}
          />
          <Button
            onClick={handleSearch}
            sx={{
              backgroundColor: '#388E3C',
              color: 'white',
              '&:hover': { backgroundColor: '#66BB6A' },
            }}
          >
            <SearchIcon />
          </Button>
        </Box>

        {/* Display search results */}
        <Grid container spacing={3} sx={{ marginTop: 2 }}>
          {filteredTools.length === 0 ? (
            <Typography variant="h6">No results found</Typography>
          ) : (
            filteredTools.map((tool) => (
              <Grid item key={tool.id} xs={12} sm={4}>
                <Box sx={{
                  padding: 2, 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  textAlign: 'center',
                  backgroundColor: '#fff'
                }}>
                  <Typography variant="h6">{tool.name}</Typography>
                  <Typography variant="body2" color="textSecondary">
                    {tool.category}
                  </Typography>
                </Box>
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};

export default Search;
