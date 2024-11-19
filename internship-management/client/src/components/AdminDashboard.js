import React from 'react';
import AdminNavbar from './AdminNavbar';
import StatsCard from './StatsCard';
import StudentList from './StudentList';
import ReportManagement from './ReportManagement';
import './styles/AdminDashboard.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <header className="dashboard-header">
        <h1>Welcome, Admin</h1>
        <p>Manage internships, track reports, and view analytics.</p>
      </header>
      <section className="stats-section">
        <StatsCard title="Total Interns" value="120" />
        <StatsCard title="Pending Reports" value="15" />
        <StatsCard title="Completed Reports" value="105" />
      </section>
      <section className="management-section">
        <StudentList />
        <ReportManagement />
      </section>
    </div>
  );
};

export default AdminDashboard;
