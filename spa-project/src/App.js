import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import UserProfilePage from './pages/UserProfilePage';
import NavBar from './components/NavBar';
import './styles.css'; // Import the CSS file
//kvdqyvd
function App() {
  const [likedItems, setLikedItems] = useState([]);

  const handleLikeItem = (item) => {
    if (!likedItems.includes(item)) {
      setLikedItems([...likedItems, item]);
      console.log("Liked Items: ", [...likedItems, item]); // Check if state updates
    }
  };

  return (
    <Router>
      <div>
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage onLikeItem={handleLikeItem} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile/:username" element={<UserProfilePage likedItems={likedItems} />} /> {/* Dynamic route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

