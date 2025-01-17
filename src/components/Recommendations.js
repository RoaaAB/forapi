import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid } from '@mui/material';

const Recommendations = ({ tools }) => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || ''; // Get the searchTerm from navigation state
  const [filteredTools, setFilteredTools] = useState([]);

  useEffect(() => {
    // Filter tools based on the search term
    if (searchTerm) {
      const filtered = tools.filter((tool) =>
        tool.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTools(filtered);
    } else {
      setFilteredTools(tools); // Show all tools if no search term
    }
  }, [searchTerm, tools]);

  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>
          Recommended Tools
        </Typography>
        <Typography variant="body1" gutterBottom>
          Based on your interests, we recommend the following tools:
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{ marginTop: 4 }}>
        {filteredTools.length > 0 ? (
          filteredTools.map((tool) => (
            <Grid item xs={12} sm={6} md={4} key={tool.id}>
              <Box
                sx={{
                  padding: 3,
                  backgroundColor: '#FFF',
                  borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                }}
              >
                <Typography variant="h6">{tool.name}</Typography>
                <Typography variant="body2">{tool.description}</Typography>
              </Box>
            </Grid>
          ))
        ) : (
          <Typography variant="h6" sx={{ textAlign: 'center', width: '100%', marginTop: 4 }}>
            No tools found for your search.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default Recommendations;
