import React from 'react';

const StudentList = () => {
  return (
    <div id="students" className="student-list">
      <h2>Student Management</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Internship Company</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>ABC Corp</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>XYZ Ltd</td>
            <td>Completed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
