import React from 'react';
import '../styles/ProgressBar.css';

function ProgressBar({ current, total, label }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress-container">
      <div className="progress-header">
        <span className="progress-label">{label}</span>
        <span className="progress-text">{current} / {total}</span>
      </div>
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <span className="progress-percentage">{Math.round(percentage)}%</span>
    </div>
  );
}

export default ProgressBar;