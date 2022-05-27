import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Dashboard from "../pages/dashboard/dashboard";
import Home from "../pages/dashboard/home";
import Profile from "../pages/dashboard/profile";
import Notfound from "../pages/notfound";
import Service from "../pages/service";
import SignIn from "../pages/signin";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
     
      <Route path="*" element={<Notfound />} />     
       <Route path="/" element={<SignIn />} />
       <Route path="dashboard/*" element={<Dashboard />} />
      <Route path="/home/:id" element={<Home />} />
     
      
    </Routes>
    </Router>
  );
}
