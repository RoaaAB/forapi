import React, { useState } from "react";
import { auth, updateProfile } from "../firebase"; // Import updateProfile
import { TextField, Button, Typography, Container, Box, Avatar, IconButton } from "@mui/material";
import { PhotoCamera } from "@mui/icons-material"; // Import camera icon for the avatar

const Profile = () => {
  const [displayName, setDisplayName] = useState(auth.currentUser?.displayName || ""); // Get current display name if exists
  const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || ""); // Get current profile picture
  const [error, setError] = useState("");  // For error handling
  const [success, setSuccess] = useState("");  // For success messages
  const [imageFile, setImageFile] = useState(null);  // For storing the image file

  // Handle profile update
  const handleUpdateProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        // Prepare the updated user profile data
        const updates = { displayName };
        if (imageFile) {
          // If an image file is uploaded, update the profile picture
          updates.photoURL = URL.createObjectURL(imageFile);
        }
        await updateProfile(user, updates); // Update the profile with new data
        setSuccess("Profile updated successfully!");
      } catch (error) {
        setError("Error updating profile: " + error.message);
      }
    }
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPhotoURL(URL.createObjectURL(file)); // Display the selected image
    }
  };

  return (
    <Container>
      <Box sx={{ marginTop: 5, padding: 4, boxShadow: 3, borderRadius: "8px", backgroundColor: "#f9f9f9" }}>
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 600 }}>
          Update Profile
        </Typography>

        {error && <Typography color="error" align="center">{error}</Typography>}
        {success && <Typography color="primary" align="center">{success}</Typography>}

        {/* Avatar and Image Upload */}
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: 3 }}>
          <Avatar 
            alt="Profile Picture"
            src={photoURL || "https://via.placeholder.com/150"} 
            sx={{ width: 100, height: 100, marginBottom: 2 }} 
          />
          <IconButton color="primary" aria-label="upload picture" component="label">
            <input
              hidden
              accept="image/*"
              type="file"
              onChange={handleImageChange}
            />
            <PhotoCamera />
          </IconButton>
        </Box>

        {/* Display Name Field */}
        <TextField
          label="Display Name"
          variant="outlined"
          fullWidth
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          required
          sx={{ marginBottom: 2 }}
        />

        {/* Button to submit the update */}
        <Button
          variant="contained"
          color="success"  // Green button
          fullWidth
          sx={{
            marginTop: 2,
            padding: "10px 0",
            borderRadius: 4,
            '&:hover': { backgroundColor: "#388e3c" },
          }}
          onClick={handleUpdateProfile}
        >
          Update Profile
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;
