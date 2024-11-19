import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import "./App.css";
import './index.css'; 
import StudentDashboard from "./components/StudentDashboard.js";
import MentorDashboard from "./components/MentorDashboard.js";
const App = () => {
  return (
    <>
      {/* <StudentDashboard /> */}
      <MentorDashboard />
    </>
  );
};

export default App;