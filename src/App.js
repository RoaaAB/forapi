import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Feedback from "./components/Feedback";
import Help from "./components/Help";
import Login from "./components/Login";
import Profile from "./components/Profile";
import ProfilePage from "./components/ProfilePage";
import Recommendations from "./components/Recommendations";
import Search from "./components/Search";
import Signup from "./components/Signup";
import CreateProfile from "./components/CreateProfile";
import PrivateRoute from "./components/PrivateRoute";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Header user={user} />
      <Container style={{ marginTop: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/help" element={<Help />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<Search />} /> {/* Ensure this is rendered */}

          {/* Private Routes */}
          <Route
            path="/create-profile"
            element={
              <PrivateRoute>
                <CreateProfile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route
            path="/profilepage"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="/recommendations" element={<Recommendations />} />
        </Routes>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
