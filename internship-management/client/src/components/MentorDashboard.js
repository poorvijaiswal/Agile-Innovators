'use client'

import { useState } from 'react'
import { Bell, Calendar, CheckSquare, FileText, MessageSquare, Users } from 'lucide-react'

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [reports, setReports] = useState([
    { id: 1, internName: 'Aarya Jaiswal', reportTitle: 'Week 1 Progress', status: 'Pending' },
    { id: 2, internName: 'Liza Ghune', reportTitle: 'Month 1 Summary', status: 'Graded' },
    { id: 3, internName: 'Nehal Joshi', reportTitle: 'Final Report', status: 'Pending' },
  ])
  const [interns, setInterns] = useState([
    { id: 1, name: 'Aarya Jaiswal', progress: 25, complianceStatus: 'Incomplete' },
    { id: 2, name: 'Liza Ghune', progress: 50, complianceStatus: 'Complete' },
    { id: 3, name: 'Nehal Joshi', progress: 75, complianceStatus: 'In Progress' },
  ])
  const [meetings, setMeetings] = useState([
    { id: 1, internName: 'Aarya Jaiswal', date: '2024-05-20', time: '14:00' },
    { id: 2, internName: 'Liza Ghune', date: '2024-05-21', time: '15:30' },
    { id: 3, internName: 'Nehal Joshi', date: '2024-05-22', time: '10:00' },
  ])

  const handleGradeSubmit = (reportId, grade) => {
    setReports(reports.map(report => 
      report.id === reportId ? { ...report, status: 'Graded', grade } : report
    ))
    alert(`Grade ${grade} submitted for report ${reportId}`)
  }

  const handleComplianceUpdate = (internId, status) => {
    setInterns(interns.map(intern => 
      intern.id === internId ? { ...intern, complianceStatus: status } : intern
    ))
    alert(`Compliance status updated to ${status} for intern ${internId}`)
  }

  const handleMeetingSchedule = (e) => {
    e.preventDefault()
    const newMeeting = {
      id: meetings.length + 1,
      internName: e.target.internName.value,
      date: e.target.date.value,
      time: e.target.time.value,
    }
    setMeetings([...meetings, newMeeting])
    alert('New meeting scheduled successfully!')
    e.target.reset()
  }

  return (
    <div className="dashboard">
      <style jsx>{`
        .dashboard {
          font-family: Arial, sans-serif;
          background-color: #f0f4f8;
          min-height: 100vh;
        }
        .navbar {
          background-color: #1a365d;
          color: white;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .navbar-brand {
          font-size: 1.5rem;
          font-weight: bold;
          color: white;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }
        .tabs {
          display: flex;
          background-color: white;
          border-radius: 8px;
          overflow: hidden;
          margin-bottom: 2rem;
        }
        .tab {
          padding: 1rem 2rem;
          border: none;
          background-color: transparent;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .tab.active {
          background-color: #4299e1;
          color: white;
        }
        .card {
          background-color: white;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          padding: 1.5rem;
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 1.25rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #2c5282;
        }
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-label {
          display: block;
          margin-bottom: 0.5rem;
          color: #4a5568;
        }
        .form-control {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 1rem;
        }
        .btn {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        .btn-primary {
          background-color: #4299e1;
          color: white;
        }
        .btn-primary:hover {
          background-color: #3182ce;
        }
        .list-item {
          background-color: #edf2f7;
          border-radius: 4px;
          padding: 1rem;
          margin-bottom: 0.5rem;
        }
        .progress-bar {
          height: 10px;
          background-color: #e2e8f0;
          border-radius: 5px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          background-color: #48bb78;
          transition: width 0.3s ease;
        }
        .badge {
          display: inline-block;
          padding: 0.25rem 0.5rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: bold;
          text-transform: uppercase;
        }
        .badge-pending {
          background-color: #faf089;
          color: #744210;
        }
        .badge-complete {
          background-color: #9ae6b4;
          color: #22543d;
        }
        .badge-progress {
          background-color: #90cdf4;
          color: #2c5282;
        }
      `}</style>

      <nav className="navbar">
        <span className="navbar-brand">Mentor Dashboard</span>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <button style={{ background: 'none', border: 'none', color: 'white', marginRight: '1rem' }}>
            <Bell size={20} />
          </button>
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4299e1', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span>MT</span>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="tabs">
          <button className={`tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</button>
          <button className={`tab ${activeTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveTab('reports')}>Reports</button>
          <button className={`tab ${activeTab === 'interns' ? 'active' : ''}`} onClick={() => setActiveTab('interns')}>Interns</button>
          <button className={`tab ${activeTab === 'compliance' ? 'active' : ''}`} onClick={() => setActiveTab('compliance')}>Compliance</button>
          <button className={`tab ${activeTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveTab('schedule')}>Schedule</button>
        </div>

        {activeTab === 'overview' && (
          <div className="grid">
            <div className="card">
              <h3 className="card-title">Assigned Interns</h3>
              <p>{interns.length} interns under your mentorship</p>
              <Users size={48} color="#4299e1" style={{ marginTop: '1rem' }} />
            </div>
            <div className="card">
              <h3 className="card-title">Pending Reports</h3>
              <p>{reports.filter(r => r.status === 'Pending').length} reports need grading</p>
              <FileText size={48} color="#4299e1" style={{ marginTop: '1rem' }} />
            </div>
            <div className="card">
              <h3 className="card-title">Upcoming Meetings</h3>
              <p>{meetings.length} scheduled mentor meetings</p>
              <Calendar size={48} color="#4299e1" style={{ marginTop: '1rem' }} />
            </div>
          </div>
        )}

        {activeTab === 'reports' && (
          <div className="card">
            <h3 className="card-title">Intern Reports</h3>
            {reports.map(report => (
              <div key={report.id} className="list-item">
                <h4>{report.internName} - {report.reportTitle}</h4>
                <p>Status: {report.status}</p>
                {report.status === 'Pending' && (
                  <div>
                    <input type="number" min="0" max="100" placeholder="Grade" className="form-control" style={{ width: '100px', marginRight: '10px' }} />
                    <button className="btn btn-primary" onClick={() => handleGradeSubmit(report.id, 85)}>Submit Grade</button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {activeTab === 'interns' && (
          <div className="card">
            <h3 className="card-title">Assigned Interns</h3>
            {interns.map(intern => (
              <div key={intern.id} className="list-item">
                <h4>{intern.name}</h4>
                <p>Progress: {intern.progress}%</p>
                <div className="progress-bar">
                  <div className="progress-bar-fill" style={{ width: `${intern.progress}%` }}></div>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '10px' }} onClick={() => alert(`Sending message to ${intern.name}`)}>
                  <MessageSquare size={16} style={{ marginRight: '5px' }} />
                  Message
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'compliance' && (
          <div className="card">
            <h3 className="card-title">Compliance Checklist</h3>
            {interns.map(intern => (
              <div key={intern.id} className="list-item">
                <h4>{intern.name}</h4>
                <p>Compliance Status: 
                  <span className={`badge ${
                    intern.complianceStatus === 'Complete' ? 'badge-complete' : 
                    intern.complianceStatus === 'In Progress' ? 'badge-progress' : 
                    'badge-pending'
                  }`} style={{ marginLeft: '10px' }}>
                    {intern.complianceStatus}
                  </span>
                </p>
                <select 
                  className="form-control" 
                  style={{ width: '200px', marginRight: '10px' }}
                  onChange={(e) => handleComplianceUpdate(intern.id, e.target.value)}
                  value={intern.complianceStatus}
                >
                  <option value="Incomplete">Incomplete</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Complete">Complete</option>
                </select>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'schedule' && (
          <div className="card">
            <h3 className="card-title">Schedule Mentor Meetings</h3>
            <form onSubmit={handleMeetingSchedule}>
              <div className="form-group">
                <label htmlFor="internName" className="form-label">Intern Name</label>
                <input type="text" id="internName" name="internName" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="date" id="date" name="date" className="form-control" required />
              </div>
              <div className="form-group">
                <label htmlFor="time" className="form-label">Time</label>
                <input type="time" id="time" name="time" className="form-control" required />
              </div>
              <button type="submit" className="btn btn-primary">Schedule Meeting</button>
            </form>
            <h4 style={{ marginTop: '2rem' }}>Upcoming Meetings</h4>
            {meetings.map(meeting => (
              <div key={meeting.id} className="list-item">
                <h4>{meeting.internName}</h4>
                <p>Date: {meeting.date} at {meeting.time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )};