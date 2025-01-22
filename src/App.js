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
import Results from "./components/Results"; // Import Results component
import Guide from "./components/Guide"; // Import Guide component

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("Error captured by ErrorBoundary:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    return this.props.children;
  }
}

function App() {
  const [user, setUser] = useState(null);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleSearchResults = (results) => {
    setSearchResults(results);
  };

  const handleLogout = () => {
    auth.signOut().then(() => {
      setUser(null);
    });
  };

  return (
    <ErrorBoundary>
      <Router>
        <Header user={user} onLogout={handleLogout} />
        <Container sx={{ marginTop: 2 }}>
          <Routes>
            <Route path="/" element={<Home searchResults={searchResults} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/help" element={<Help />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/search" element={<Search onSearch={handleSearchResults} />} />
            <Route path="/results" element={<Results />} />
            <Route path="/guide" element={<Guide />} /> 
            <Route
              path="/create-profile"
              element={<PrivateRoute><CreateProfile /></PrivateRoute>}
            />
            <Route
              path="/profile"
              element={<PrivateRoute><Profile /></PrivateRoute>}
            />
            <Route
              path="/profilepage"
              element={<PrivateRoute><ProfilePage /></PrivateRoute>}
            />
            <Route path="/recommendations" element={<Recommendations />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
