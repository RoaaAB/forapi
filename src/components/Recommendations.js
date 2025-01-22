import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Typography, Box, Grid } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests

const Recommendations = () => {
  const location = useLocation();
  const searchTerm = location.state?.searchTerm || ''; // Get the searchTerm from navigation state
  const [filteredTools, setFilteredTools] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecommendations = useCallback(async () => {
    if (!searchTerm) return;
  
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('http://127.0.0.1:8000/process_query', { params: { query: searchTerm } });
      if (response.data.tools && response.data.tools.length > 0) {
        setFilteredTools(response.data.tools); // Assuming the response includes the tools
      } else {
        setFilteredTools([]); // No tools found for the query
      }
    } catch (err) {
      console.error('Error fetching recommendations:', err);
      // Handle specific errors
      if (!err.response) {
        // Network error
        setError('Network error. Please check your internet connection and try again.');
      } else if (err.response.status >= 500) {
        // Server error
        setError('There was an issue with the server. Please try again later.');
      } else {
        // Other errors (e.g., bad request)
        setError('Failed to fetch recommendations. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  }, [searchTerm]);
  
  useEffect(() => {
    fetchRecommendations();
  }, [searchTerm, fetchRecommendations]);

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
      {loading && (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4 }}>
          Loading recommendations...
        </Typography>
      )}
      {error && (
        <Typography variant="h6" sx={{ textAlign: 'center', marginTop: 4, color: 'red' }}>
          {error}
        </Typography>
      )}
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
          !loading && !error && (
            <Typography variant="h6" sx={{ textAlign: 'center', width: '100%', marginTop: 4 }}>
              No tools found for your search.
            </Typography>
          )
        )}
      </Grid>
    </Container>
  );
};

export default Recommendations;
