import React, { useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profile");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: "auto", padding: "20px", boxShadow: 3 }}>
      <Typography variant="h5">Login</Typography>
      {error && <Typography color="error">{error}</Typography>}
      <TextField
        label="Email"
        type="email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
