import React from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';

const Guide = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ padding: 4, backgroundColor: '#f7f7f7', borderRadius: 2 }}>
        <Typography variant="h3" gutterBottom sx={{ color: '#388E3C', fontWeight: 'bold', textAlign: 'center' }}>
          Guide to Using the AI-Driven Tool Recommendation System
        </Typography>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2 }}>
            <Typography variant="h5" sx={{ color: '#444', lineHeight: 1.8 }}>
              Welcome to the <strong>AI-Driven Tool Recommendation System</strong>! This guide will help you navigate through the various research tools that our system recommends throughout different stages of your academic research. By following this guide, you will learn how to utilize the AI system effectively and make informed decisions to boost your productivity.
            </Typography>
          </Paper>
        </motion.div>

        <Divider sx={{ margin: '20px 0' }} />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ color: '#388E3C', fontWeight: 'bold', marginBottom: 2 }}>
            How to Use the System:
          </Typography>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2 }}>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem>
                <ListItemText
                  primary={<strong>1. Search and Filter Tools</strong>}
                  secondary="Start by entering keywords related to your research stage (e.g., 'data collection,' 'literature review,' or 'analysis') in the search bar. You can also use specific category filters like 'Writing,' 'Analysis,' or 'Planning.'"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>2. View Tool Recommendations</strong>}
                  secondary="Once you search or filter, you'll see a list of recommended tools. Each tool comes with a description of its features, pros and cons, and typical use cases."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>3. Read User Reviews</strong>}
                  secondary="Check reviews and ratings from other researchers. These insights help you gauge the tool's effectiveness."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>4. Compare Multiple Tools</strong>}
                  secondary="Select and compare multiple tools side-by-side to assess their key features and make an informed decision."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>5. Track Your Progress</strong>}
                  secondary="As you progress through different stages of research, the system will suggest tools suited for each phase."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>6. Save and Share Tool Lists</strong>}
                  secondary="Save your favorite tools and share your lists with collaborators for easier project management."
                />
              </ListItem>
            </List>
          </Paper>
        </motion.div>

        <Divider sx={{ margin: '20px 0' }} />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ color: '#388E3C', fontWeight: 'bold', marginBottom: 2 }}>
            Why Use the AI-Driven Tool Recommendation System?
          </Typography>
          <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#fff', borderRadius: 2 }}>
            <List sx={{ paddingLeft: 2 }}>
              <ListItem>
                <ListItemText
                  primary={<strong>1. Efficiency</strong>}
                  secondary="Quickly find the best tools suited for each phase of your research."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>2. Personalization</strong>}
                  secondary="Get AI-powered recommendations tailored to your unique needs and research objectives."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>3. Comprehensive Database</strong>}
                  secondary="Access a wide range of tools for all stages of research, from planning to publication."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>4. Community Insight</strong>}
                  secondary="Benefit from user reviews and ratings that provide valuable insights into tool effectiveness."
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={<strong>5. Streamlined Decision Making</strong>}
                  secondary="Compare tools side-by-side and make well-informed decisions in less time."
                />
              </ListItem>
            </List>
          </Paper>
        </motion.div>

        <Divider sx={{ margin: '20px 0' }} />

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h6" sx={{ color: '#388E3C', lineHeight: 1.8 }}>
            By following this guide, you'll be able to make the most out of the AI-Driven Tool Recommendation System. Whether you're in the early stages of research or fine-tuning your final draft, our system will help you stay organized and productive. Start exploring tools now to optimize your academic success!
          </Typography>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Guide;
