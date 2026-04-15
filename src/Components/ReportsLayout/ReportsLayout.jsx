import React from 'react';
import './ReportsLayout.css';

const reports = [
  { id: 1, name: "Blood Test Report", date: "2026-01-15", doctor: "Dr. John Smith" },
  { id: 2, name: "X-Ray Report", date: "2026-02-20", doctor: "Dr. Sarah Johnson" },
  { id: 3, name: "MRI Scan Report", date: "2026-03-10", doctor: "Dr. Mike Wilson" },
];

const ReportsLayout = () => {
  return (
    <div className="reports-container">
      <h2>Your Reports</h2>
      <table className="reports-table">
        <thead>
          <tr>
            <th>Report Name</th>
            <th>Date</th>
            <th>Doctor</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id}>
              <td>{report.name}</td>
              <td>{report.date}</td>
              <td>{report.doctor}</td>
              <td>
                <button className="btn-view">View</button>
                <button className="btn-download">Download</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReportsLayout;
