// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProfilePage from './components/ProfilePage';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<ProfilePage />}/>
          <Route path="/profile" element={<ProfilePage />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
