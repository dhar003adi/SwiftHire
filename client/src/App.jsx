import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import Home from "./pages/Home";
import AddJob from "./components/AddJob";
import UserDetails from "./components/UserDetails";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/add-user" element={<UserDetails />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
