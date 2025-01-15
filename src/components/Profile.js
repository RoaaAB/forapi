// src/components/Profile.js
import React, { useState } from "react";
import { auth, updateProfile } from "../firebase"; // Import updateProfile
import { TextField, Button, Typography, Container, Box } from "@mui/material";

const Profile = () => {
  const [displayName, setDisplayName] = useState(auth.currentUser?.displayName || ""); // Get current display name if exists
  const [error, setError] = useState("");  // For error handling
  const [success, setSuccess] = useState("");  // For success messages

  // Handle profile update
  const handleUpdateProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        // Update the user's display name
        await updateProfile(user, { displayName });
        setSuccess("Profile updated successfully!");
      } catch (error) {
        setError("Error updating profile: " + error.message);
      }
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 5 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Update Profile
        </Typography>

        {error && <Typography color="error" align="center">{error}</Typography>}
        {success && <Typography color="primary" align="center">{success}</Typography>}

        {/* Display Name Field */}
        <TextField
          label="Display Name"
          variant="outlined"
          fullWidth
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
        />

        {/* Button to submit the update */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
          onClick={handleUpdateProfile}
        >
          Update Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
