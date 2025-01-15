import React, { useState, useEffect } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { db, auth } from "../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [bio, setBio] = useState("");
  const [location, setLocation] = useState("");
  const [website, setWebsite] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userRef = doc(db, "users", user.uid);
          const userDoc = await getDoc(userRef);
          
          if (userDoc.exists()) {
            setBio(userDoc.data().bio);
            setLocation(userDoc.data().location);
            setWebsite(userDoc.data().website);
          }
        }
      } catch (err) {
        setError("Failed to fetch profile data");
      }
    };

    fetchProfileData();
  }, []);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    try {
      const user = auth.currentUser;
      const userRef = doc(db, "users", user.uid);

      // Update the user's profile in Firestore
      await updateDoc(userRef, {
        bio,
        location,
        website,
      });

      // Redirect to the profile page after update
      navigate("/profile");
    } catch (err) {
      setError("Failed to update profile");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Edit Your Profile</Typography>
      <form onSubmit={handleProfileUpdate}>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <TextField
          label="Bio"
          variant="outlined"
          fullWidth
          margin="normal"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <TextField
          label="Location"
          variant="outlined"
          fullWidth
          margin="normal"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <TextField
          label="Website"
          variant="outlined"
          fullWidth
          margin="normal"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
        <Button type="submit" variant="contained" fullWidth>
          Save Changes
        </Button>
      </form>
    </Container>
  );
};

export default ProfilePage;
