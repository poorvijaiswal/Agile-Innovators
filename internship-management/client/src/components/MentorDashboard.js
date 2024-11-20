import React, { useState, useEffect } from 'react'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [interns, setInterns] = useState([
    { id: 1, name: 'Rahul Sharma', company: 'TechCorp India', status: 'Active', location: { lat: 28.6139, lng: 77.2090 } },
    { id: 2, name: 'Priya Patel', company: 'InnovateNow', status: 'Active', location: { lat: 19.0760, lng: 72.8777 } },
    { id: 3, name: 'Amit Singh', company: 'FutureTech Solutions', status: 'Inactive', location: { lat: 12.9716, lng: 77.5946 } },
  ])
  const [reports, setReports] = useState([
    { id: 1, internName: 'Rahul Sharma', title: 'Week 1 Progress', status: 'Pending', grade: null },
    { id: 2, internName: 'Priya Patel', title: 'Month 1 Summary', status: 'Reviewed', grade: 'B' },
    { id: 3, internName: 'Amit Singh', title: 'Final Presentation', status: 'Approved', grade: 'A' },
  ])
  const [meetings, setMeetings] = useState([
    { id: 1, internName: 'Rahul Sharma', date: '2024-05-20', time: '10:00' },
    { id: 2, internName: 'Priya Patel', date: '2024-05-21', time: '14:00' },
  ])

  const renderContent = () => {
    switch(activeTab) {
      case 'overview':
        return <OverviewContent interns={interns} reports={reports} meetings={meetings} />
      case 'interns':
        return <InternsContent interns={interns} setInterns={setInterns} />
      case 'reports':
        return <ReportsContent reports={reports} setReports={setReports} />
      case 'meetings':
        return <MeetingsContent interns={interns} meetings={meetings} setMeetings={setMeetings} />
      case 'location':
        return <LocationTrackingContent interns={interns} />
      default:
        return <OverviewContent interns={interns} reports={reports} meetings={meetings} />
    }
  }

  return (
    <div style={{ display: 'flex', height: '80vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Sidebar */}
      <aside style={{ width: '200px', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <nav>
          <button onClick={() => setActiveTab('overview')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === 'overview' ? '#007bff' : '#ffffff', color: activeTab === 'overview' ? '#ffffff' : '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📊 Overview</button>
          <button onClick={() => setActiveTab('interns')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === 'interns' ? '#007bff' : '#ffffff', color: activeTab === 'interns' ? '#ffffff' : '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>👥 Interns</button>
          <button onClick={() => setActiveTab('reports')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === 'reports' ? '#007bff' : '#ffffff', color: activeTab === 'reports' ? '#ffffff' : '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📝 Reports</button>
          <button onClick={() => setActiveTab('meetings')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === 'meetings' ? '#007bff' : '#ffffff', color: activeTab === 'meetings' ? '#ffffff' : '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>🗓 Meetings</button>
          <button onClick={() => setActiveTab('location')} style={{ display: 'block', width: '100%', padding: '10px', marginBottom: '10px', backgroundColor: activeTab === 'location' ? '#007bff' : '#ffffff', color: activeTab === 'location' ? '#ffffff' : '#000000', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>📍 Location</button>
        </nav>
      </aside>

      {/* Main content */}
      <main style={{ flex: 1, padding: '20px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '28px' }}>Welcome, Mentor</h2>
        </div>
        {renderContent()}
      </main>
    </div>
  )
}

function OverviewContent({ interns, reports, meetings }) {
  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Assigned Interns</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{interns.length}</p>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Pending Reports</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>
            {reports.filter(report => report.status === 'Pending').length}
          </p>
        </div>
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Upcoming Meetings</h3>
          <p style={{ fontSize: '24px', fontWeight: 'bold' }}>{meetings.length}</p>
        </div>
      </div>
      <div style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>Recent Activity</h3>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ margin: 0 }}>📝 Rahul Sharma submitted a new report</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>2 hours ago</p>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <p style={{ margin: 0 }}>📍 Priya Patel updated their location</p>
            <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>5 hours ago</p>
          </li>
        </ul>
      </div>
    </div>
  )
}

function InternsContent({ interns, setInterns }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredInterns = interns.filter(intern =>
    intern.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    intern.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const toggleInternStatus = (id) => {
    setInterns(interns.map(intern => 
      intern.id === id ? { ...intern, status: intern.status === 'Active' ? 'Inactive' : 'Active' } : intern
    ))
  }

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Interns Management</h3>
      <input
        type="text"
        placeholder="Search interns..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Name</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Company</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredInterns.map((intern) => (
            <tr key={intern.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{intern.name}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{intern.company}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <span style={{ 
                  padding: '5px 10px', 
                  borderRadius: '20px', 
                  backgroundColor: intern.status === 'Active' ? '#d4edda' : '#f8d7da',
                  color: intern.status === 'Active' ? '#155724' : '#721c24'
                }}>
                  {intern.status}
                </span>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <button onClick={() => toggleInternStatus(intern.id)} style={{ padding: '5px 10px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                  {intern.status === 'Active' ? '❌ Deactivate' : '✅ Activate'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function ReportsContent({ reports, setReports }) {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredReports = reports.filter(report =>
    report.internName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    report.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const updateReportStatus = (id, newStatus) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, status: newStatus } : report
    ))
  }

  const updateReportGrade = (id, newGrade) => {
    setReports(reports.map(report => 
      report.id === id ? { ...report, grade: newGrade } : report
    ))
  }

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Reports Management</h3>
      <input
        type="text"
        placeholder="Search reports..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '5px', border: '1px solid #ccc' }}
      />
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Intern Name</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Report Title</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Status</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Grade</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredReports.map((report) => (
            <tr key={report.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{report.internName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{report.title}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <span style={{ 
                  padding: '5px 10px', 
                  borderRadius: '20px', 
                  backgroundColor: 
                    report.status === 'Approved' ? '#d4edda' : 
                    report.status === 'Reviewed' ? '#cce5ff' : '#f8d7da',
                  color: 
                    report.status === 'Approved' ? '#155724' : 
                    report.status === 'Reviewed' ? '#004085' : '#721c24'
                }}>
                  {report.status}
                </span>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <select 
                  value={report.grade || ''}
                  onChange={(e) => updateReportGrade(report.id, e.target.value)}
                  style={{ padding: '5px', borderRadius: '5px' }}
                >
                  <option value="">Select Grade</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="F">F</option>
                </select>
              </td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
                <select 
                  value={report.status} 
                  onChange={(e) => updateReportStatus(report.id, e.target.value)}
                  style={{ padding: '5px', borderRadius: '5px' }}
                >
                  <option value="Pending">Pending</option>
                  <option value="Reviewed">Reviewed</option>
                  <option value="Approved">Approved</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function MeetingsContent({ interns, meetings, setMeetings }) {
  const [selectedIntern, setSelectedIntern] = useState('')
  const [meetingDate, setMeetingDate] = useState('')
  const [meetingTime, setMeetingTime] = useState('')

  const scheduleMeeting = () => {
    if (selectedIntern && meetingDate && meetingTime) {
      const newMeeting = {
        id: meetings.length + 1,
        internName: selectedIntern,
        date: meetingDate,
        time: meetingTime
      }
      setMeetings([...meetings, newMeeting])
      setSelectedIntern('')
      setMeetingDate('')
      setMeetingTime('')
    }
  }

  return (
    <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Schedule Meetings</h3>
      <div style={{ marginBottom: '20px' }}>
        <select
          value={selectedIntern}
          onChange={(e) => setSelectedIntern(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px' }}
        >
          <option value="">Select Intern</option>
          {interns.map(intern => (
            <option key={intern.id} value={intern.name}>{intern.name}</option>
          ))}
        </select>
        <input
          type="date"
          value={meetingDate}
          onChange={(e) => setMeetingDate(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px' }}
        />
        <input
          type="time"
          value={meetingTime}
          onChange={(e) => setMeetingTime(e.target.value)}
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px' }}
        />
        <button onClick={scheduleMeeting} style={{ padding: '10px', backgroundColor: '#28a745', color: '#ffffff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
          📅 Schedule Meeting
        </button>
      </div>
      <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Scheduled Meetings</h4>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Intern Name</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Date</th>
            <th style={{ textAlign: 'left', padding: '10px', borderBottom: '1px solid #ccc' }}>Time</th>
          </tr>
        </thead>
        <tbody>
          {meetings.map((meeting) => (
            <tr key={meeting.id}>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{meeting.internName}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{meeting.date}</td>
              <td style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>{meeting.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function LocationTrackingContent({ interns }) {
    const locations = [
        { id: 1, name: 'Rahul Sharma', x: 50, y: 100 },
        { id: 2, name: 'Priya Patel', x: 150, y: 80 },
        { id: 3, name: 'Amit Singh', x: 100, y: 150 },
        { id: 4, name: 'Neha Gupta', x: 200, y: 120 },
        { id: 5, name: 'Vikram Malhotra', x: 80, y: 50 },
      ]
    
      return (
        <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h3 style={{ fontSize: '18px', marginBottom: '20px' }}>Intern Locations in Indore</h3>
          <div style={{ position: 'relative', width: '100%', height: '400px', border: '1px solid #ccc', borderRadius: '5px', overflow: 'hidden' }}>
            {/* Static map background */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: '#e6e6e6' }}>
              {/* Simplified representation of major roads */}
              <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '2px', backgroundColor: '#a0a0a0' }} />
              <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: '2px', backgroundColor: '#a0a0a0' }} />
              
              {/* City name */}
              <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '24px', fontWeight: 'bold', color: '#505050' }}>
                Indore
              </div>
            </div>
    
            {/* Intern location markers */}
            {locations.map((location) => (
              <div
                key={location.id}
                style={{
                  position: 'absolute',
                  top: `${location.y}px`,
                  left: `${location.x}px`,
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: '#007bff',
                  cursor: 'pointer',
                }}
                title={location.name}
              />
            ))}
          </div>
          
          {/* Legend */}
          <div style={{ marginTop: '20px' }}>
            <h4 style={{ fontSize: '16px', marginBottom: '10px' }}>Intern Locations:</h4>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {locations.map((location) => (
                <li key={location.id} style={{ marginBottom: '5px' }}>
                  <span style={{ display: 'inline-block', width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#007bff', marginRight: '10px' }} />
                  {location.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )
}