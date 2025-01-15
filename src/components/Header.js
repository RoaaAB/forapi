import React from "react";
import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";  // Import the signOut function from Firebase
import { auth } from "../firebase";  // Import auth from your firebase configuration

const Header = ({ user }) => {

  // Handle user logout
  const handleLogout = async () => {
    try {
      await signOut(auth);  // Firebase signOut function
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <AppBar position="sticky">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          AI Tool System
        </Typography>
        <Button component={Link} to="/" color="inherit">
          Home
        </Button>
        <Button component={Link} to="/about" color="inherit">
          About
        </Button>
        <Button component={Link} to="/contact" color="inherit">
          Contact
        </Button>
        
        {user ? (
          <>
            <Button component={Link} to="/profile" color="inherit">
              Profile
            </Button>
            <Button onClick={handleLogout} color="inherit">
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button component={Link} to="/login" color="inherit">
              Login
            </Button>
            <Button component={Link} to="/signup" color="inherit">
              Sign Up
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
