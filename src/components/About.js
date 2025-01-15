import React from 'react';
import { Container, Box, Typography, Grid } from '@mui/material';
import { motion } from 'framer-motion';  // Import motion from Framer Motion

const About = () => {
  return (
    <div style={{ backgroundColor: '#F9F9F9', minHeight: '100vh', padding: '0' }}>
      <Container sx={{ marginTop: 5, padding: '20px 0' }}>
        
        {/* About Section with Fade-in and Scale-up animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Box sx={{ textAlign: 'center', marginBottom: 5 }}>
            <Typography variant="h3" component="h1" sx={{ fontWeight: 500, color: '#388E3C' }}>
              About the AI-Driven Tool Recommendation System
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 300, color: '#666' }}>
              Enhancing Academic Productivity through AI-powered Research Tools
            </Typography>
          </Box>
        </motion.div>

        {/* Project Overview with Slide-in from the left */}
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#388E3C' }}>
              Project Overview
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, color: '#333', lineHeight: 1.8 }}>
              The AI-Driven Tool Recommendation System aims to enhance academic productivity by providing personalized tool suggestions to researchers. Through a comprehensive taxonomy of research tools and an advanced recommendation system, we help researchers find the best tools tailored to their specific needs at different stages of their research journey.
            </Typography>
          </Box>
        </motion.div>

        {/* Project's Impact with Slide-in from the right */}
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#388E3C' }}>
              Project's Impact
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, color: '#333', lineHeight: 1.8 }}>
              Our project aims to streamline the research process by offering personalized recommendations, a structured taxonomy of academic tools, and a guidance resource center. This will help researchers save time, increase efficiency, and make more informed decisions, ultimately driving academic productivity to new heights.
            </Typography>
          </Box>
        </motion.div>

        {/* Team and Supervision with Slide-in from the bottom */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#388E3C' }}>
              Team and Supervision
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, color: '#333', lineHeight: 1.8 }}>
              The project is supervised by Dr. Azza Zeinelabdin Karrar, an expert in Information Technology and AI. Dr. Karrar's guidance ensures the research and development of this tool are aligned with the latest academic and technological standards, providing the best possible outcomes for the research community.
            </Typography>
          </Box>
        </motion.div>

        {/* Technologies Used with Scale-up and Rotate animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#388E3C' }}>
              Technologies Used
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: 3, borderRadius: '8px' }}>
                  <Typography variant="h6" sx={{ color: '#388E3C', fontWeight: 500 }}>AI and Machine Learning</Typography>
                  <Typography variant="body2" sx={{ color: '#333', fontWeight: 300 }}>
                    Our system uses AI-driven algorithms to offer personalized recommendations based on user needs.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: 3, borderRadius: '8px' }}>
                  <Typography variant="h6" sx={{ color: '#66BB6A', fontWeight: 500 }}>Data Visualization</Typography>
                  <Typography variant="body2" sx={{ color: '#333', fontWeight: 300 }}>
                    The tool utilizes data visualization techniques to display recommendations and tool comparisons in an intuitive format.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Box sx={{ textAlign: 'center', backgroundColor: '#FFFFFF', padding: 3, borderRadius: '8px' }}>
                  <Typography variant="h6" sx={{ color: '#81C784', fontWeight: 500 }}>Cloud Technologies</Typography>
                  <Typography variant="body2" sx={{ color: '#333', fontWeight: 300 }}>
                    We rely on cloud platforms for seamless scalability, data management, and collaboration.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>

        {/* User Benefits with Fade-in, Scale-up, and Rotate */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <Box sx={{ marginBottom: 5 }}>
            <Typography variant="h4" component="h2" gutterBottom sx={{ color: '#388E3C' }}>
              User Benefits
            </Typography>
            <Typography variant="body1" sx={{ fontWeight: 300, color: '#333', lineHeight: 1.8 }}>
              Researchers will benefit from the AI-driven system by receiving personalized recommendations based on their research needs. This will save time, enhance decision-making, and provide an organized and accessible database of research tools.
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
