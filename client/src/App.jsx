import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import AddJob from "./components/AddJob";
import UserDetails from "./components/UserDetails";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import ViewJob from "./pages/ViewJob";
import StudentRegistration from "./pages/Component/StudentRegistration";
import StudentLogin from "./pages/Component/StudentLogin";
import AdminLogin from "./pages/Component/AdminLogin";
import UpdateUserDetails from "./components/UpdateUserDetails";
import Stats from "./pages/Stats";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/student-register" element={<StudentRegistration />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/view-job" element={<ViewJob />} />
          <Route path="/add-user" element={<UserDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/add-job" element={<AddJob />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/UpdateUserDetails" element={<UpdateUserDetails/>} />
          <Route path="/Stats" element={<Stats/>} />
        
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
