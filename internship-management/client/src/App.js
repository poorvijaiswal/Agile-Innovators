'use client'
import './App.css'
import { useState } from 'react'
import { Bell, BookOpen, Calendar, CheckSquare, FileText, MessageSquare, Send, User, Users } from 'lucide-react'

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState(null)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // Student Dashboard State
  const [activeStudentTab, setActiveStudentTab] = useState('overview')
  const [assignment, setAssignment] = useState('')
  const [internshipDetails, setInternshipDetails] = useState({
    companyName: '',
    location: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  // Mentor Dashboard State
  const [activeMentorTab, setActiveMentorTab] = useState('overview')
  const [reports, setReports] = useState([
    { id: 1, internName: 'Varnit Patel', reportTitle: 'Week 1 Progress', status: 'Pending' },
    { id: 2, internName: 'Liza Ghune', reportTitle: 'Month 1 Summary', status: 'Graded' },
    { id: 3, internName: 'Nehal Joshi', reportTitle: 'Final Report', status: 'Pending' },
  ])
  const [interns, setInterns] = useState([
    { id: 1, name: 'Varnit Patel', progress: 25, complianceStatus: 'Incomplete' },
    { id: 2, name: 'Liza Ghune', progress: 50, complianceStatus: 'Complete' },
    { id: 3, name: 'Nehal Joshi', progress: 75, complianceStatus: 'In Progress' },
  ])
  const [meetings, setMeetings] = useState([
    { id: 1, internName: 'Varnit Patel', date: '2024-05-20', time: '14:00' },
    { id: 2, internName: 'Liza Ghune', date: '2024-05-21', time: '15:30' },
    { id: 3, internName: 'Nehal Joshi', date: '2024-05-22', time: '10:00' },
  ])

  const handleLogin = (e) => {
    e.preventDefault()
    if (username && password) {
      setIsLoggedIn(true)
      setUserType(username.toLowerCase().includes('mentor') ? 'mentor' : 'student')
    } else {
      alert('Please enter both username and password')
    }
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType(null)
    setUsername('')
    setPassword('')
  }

  // Student Dashboard Functions
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

  // Mentor Dashboard Functions
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
    <div className="app">
     
      <nav className="navbar">
        <span className="navbar-brand">Internship Management System</span>
        {isLoggedIn && (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ background: 'none', border: 'none', color: 'white', marginRight: '1rem' }}>
              <Bell size={20} />
            </button>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#4299e1', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span>{userType === 'mentor' ? 'MT' : 'ST'}</span>
            </div>
            <button onClick={handleLogout} style={{ marginLeft: '1rem', background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              Logout
            </button>
          </div>
        )}
      </nav>

      <div className="container">
        {!isLoggedIn ? (
          <div className="login-container">
            <h2 className="login-title">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="form-group">
                <label htmlFor="username" className="form-label">Username</label>
                <input
                  type="text"
                  id="username"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password" className="form-label">Password</label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Login</button>
            </form>
          </div>
        ) : userType === 'student' ? (
          // Student Dashboard
          <>
            <div className="tabs">
              <button className={`tab ${activeStudentTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveStudentTab('overview')}>Overview</button>
              <button className={`tab ${activeStudentTab === 'assignments' ? 'active' : ''}`} onClick={() => setActiveStudentTab('assignments')}>Assignments</button>
              <button className={`tab ${activeStudentTab === 'internship' ? 'active' : ''}`} onClick={() => setActiveStudentTab('internship')}>Internship</button>
              <button className={`tab ${activeStudentTab === 'profile' ? 'active' : ''}`} onClick={() => setActiveStudentTab('profile')}>Profile</button>
            </div>

            {activeStudentTab === 'overview' && (
              <div className="grid">
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

            {activeStudentTab === 'assignments' && (
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

            {activeStudentTab === 'internship' && (
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

            {activeStudentTab === 'profile' && (
              <div className="card">
                <h3 className="card-title">Student Profile</h3>
                <div className="list-item">
                  <p><strong>Full Name:</strong> Varnit Patel</p>
                  <p><strong>Student ID:</strong> CS2021001</p>
                  <p><strong>Email:</strong> varnit@university.edu</p>
                  <p><strong>Phone:</strong> +91 9539514565</p>
                  <p><strong>Major:</strong> Computer Science</p>
                  <p><strong>Year:</strong> 3</p>
                </div>
              </div>
            )}
          </>
        ) : (
          // Mentor Dashboard
          <>
            <div className="tabs">
              <button className={`tab ${activeMentorTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveMentorTab('overview')}>Overview</button>
              <button className={`tab ${activeMentorTab === 'reports' ? 'active' : ''}`} onClick={() => setActiveMentorTab('reports')}>Reports</button>
              <button className={`tab ${activeMentorTab === 'interns' ? 'active' : ''}`} onClick={() => setActiveMentorTab('interns')}>Interns</button>
              <button className={`tab ${activeMentorTab === 'compliance' ? 'active' : ''}`} onClick={() => setActiveMentorTab('compliance')}>Compliance</button>
              <button className={`tab ${activeMentorTab === 'schedule' ? 'active' : ''}`} onClick={() => setActiveMentorTab('schedule')}>Schedule</button>
            </div>

            {activeMentorTab === 'overview' && (
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

            {activeMentorTab === 'reports' && (
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

            {activeMentorTab === 'interns' && (
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

            {activeMentorTab === 'compliance' && (
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

            {activeMentorTab === 'schedule' && (
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
          </>
        )}
      </div>
    </div>
  )
}