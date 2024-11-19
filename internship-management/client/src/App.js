import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import StudentDashboard from './components/StudentDashboard';
import AdminDashboard from './components/AdminDashboard';
import PageNotFound from './components/PageNotFound';

const App = () => {
  const role = 'student'; // Mock role; replace with backend integration

  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<LoginForm />} />
    //     <Route path="/dashboard" element={<Dashboard role={role} />} />
    //     <Route path="/student-dashboard" element={<StudentDashboard />} />
    //     <Route path="/admin-dashboard" element={<AdminDashboard />} />
    //     <Route path="*" element={<PageNotFound />} />
    //   </Routes>
    // </Router>
    <AdminDashboard />
    
  );
};

export default App;
