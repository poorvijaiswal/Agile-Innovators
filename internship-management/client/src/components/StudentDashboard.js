'use client'

import { useState } from 'react'
import { Bell, BookOpen, Calendar, MapPin, Send, User } from 'lucide-react'

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [assignment, setAssignment] = useState('')
  const [internshipDetails, setInternshipDetails] = useState({
    companyName: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const handleAssignmentSubmit = (e) => {
    e.preventDefault()
    console.log('Assignment submitted:', assignment)
    alert('Assignment submitted successfully!')
    setAssignment('')
  }

  const handleInternshipDetailsSubmit = (e) => {
    e.preventDefault()
    console.log('Internship details submitted:', internshipDetails)
    alert('Internship details saved successfully!')
    setInternshipDetails({
      companyName: '',
      location: '',
      startDate: '',
      endDate: '',
      description: ''
    })
  }

  return (
    <div className="dashboard">
      <style jsx>{`
        .dashboard {
          font-family: Arial, sans-serif;
          background-color: #f0f2f5;
          min-height: 100vh;
        }
        .navbar {
          background-color: #ffffff;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: #4a90e2;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .tabs {
          display: flex;
          margin-bottom: 2rem;
        }
        .tab {
          padding: 0.5rem 1rem;
          margin-right: 0.5rem;
          background-color: #ffffff;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .tab.active {
          background-color: #4a90e2;
          color: #ffffff;
        }
        .card {
          background-color: #ffffff;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .form-control {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .btn-primary {
          background-color: #4a90e2;
          color: #ffffff;
        }
        .profile-item {
          display: flex;
          margin-bottom: 0.5rem;
        }
        .profile-label {
          font-weight: bold;
          width: 120px;
        }
        .overview-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <span className="navbar-brand">Student Dashboard</span>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', marginRight: '1rem' }}>
              <Bell size={20} />
            </button>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4a90e2', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>ST</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={`tab ${activeTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveTab('assignments')}>Assignments</button>
          <button className={`tab ${activeTab === 'internship' ? 'active' : ''}`} onClick={() => setActiveTab('internship')}>Internship</button>
          <button className={`tab ${activeTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveTab('profile')}>Profile</button>
        </div>

        {activeTab === 'overview' && (
          <div className="overview-cards">
            <div className="card">
              <h3 className="card-title">Upcoming Deadline</h3>
              <p><Calendar size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> May 15, 2024</p>
              <button className="btn btn-primary">View details</button>
            </div>
            <div className="card">
              <h3 className="card-title">Internship Progress</h3>
              <p><BookOpen size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> 75% Completed</p>
              <button className="btn btn-primary">View details</button>
            </div>
            <div className="card">
              <h3 className="card-title">Mentor Meeting</h3>
              <p><User size={20} style={{ marginRight: '0.5rem', verticalAlign: 'middle' }} /> Tomorrow, 2:00 PM</p>
              <button className="btn btn-primary">Join meeting</button>
            </div>
          </div>
        )}

        {activeTab === 'assignments' && (
          <div className="card">
            <h3 className="card-title">Submit Assignment</h3>
            <form onSubmit={handleAssignmentSubmit}>
              <div className="form-group">
                <label htmlFor="assignment" className="form-label">Assignment</label>
                <textarea
                  className="form-control"
                  id="assignment"
                  rows="4"
                  value={assignment}
                  onChange={(e) => setAssignment(e.target.value)}
                  placeholder="Write your assignment or paste a link to your document here"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
            </form>
          </div>
        )}

        {activeTab === 'internship' && (
          <div className="card">
            <h3 className="card-title">Internship Details</h3>
            <form onSubmit={handleInternshipDetailsSubmit}>
              <div className="form-group">
                <label htmlFor="companyName" className="form-label">Company Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="companyName"
                  value={internshipDetails.companyName}
                  onChange={(e) => setInternshipDetails({...internshipDetails, companyName: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="location" className="form-label">Location</label>
                <input
                  type="text"
                  className="form-control"
                  id="location"
                  value={internshipDetails.location}
                  onChange={(e) => setInternshipDetails({...internshipDetails, location: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="startDate" className="form-label">Start Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="startDate"
                  value={internshipDetails.startDate}
                  onChange={(e) => setInternshipDetails({...internshipDetails, startDate: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="endDate" className="form-label">End Date</label>
                <input
                  type="date"
                  className="form-control"
                  id="endDate"
                  value={internshipDetails.endDate}
                  onChange={(e) => setInternshipDetails({...internshipDetails, endDate: e.target.value})}
                />
              </div>
              <div className="form-group">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="4"
                  value={internshipDetails.description}
                  onChange={(e) => setInternshipDetails({...internshipDetails, description: e.target.value})}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Save Internship Details</button>
            </form>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="card">
            <h3 className="card-title">Student Profile</h3>
            <div className="profile-item">
              <span className="profile-label">Full Name:</span>
              <span>Varnit Patel</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Student ID:</span>
              <span>CS2021001</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Email:</span>
              <span>varnit@university.in</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Phone:</span>
              <span>+91 9539512587</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Major:</span>
              <span>Computer Science</span>
            </div>
            <div className="profile-item">
              <span className="profile-label">Year:</span>
              <span>3</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )};