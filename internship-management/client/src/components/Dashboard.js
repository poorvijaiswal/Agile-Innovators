import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = ({ role }) => {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (role === 'student') {
      navigate('/student-dashboard');
    } else if (role === 'admin') {
      navigate('/admin-dashboard');
    }
  }, [role, navigate]);

  return <div>Redirecting to your dashboard...</div>;
};

export default Dashboard;
