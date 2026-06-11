import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';
import './Leaderboard.css';

function Leaderboard() {
  const navigate = useNavigate();
  const [rankings, setRankings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const currentUser = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchRankings = async () => {
      try {
        const response = await fetch(`${API_URL}/scores/rankings`);
        if (!response.ok) throw new Error('Failed to fetch rankings');
        const data = await response.json();
        setRankings(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchRankings();
  }, []);

  const getCurrentUserRank = () => {
    if (!currentUser) return null;
    return rankings.findIndex(r => r.userEmail === currentUser.email) + 1;
  };

  const getCurrentUserData = () => {
    if (!currentUser) return null;
    return rankings.find(r => r.userEmail === currentUser.email);
  };

  if (loading) return <div className="leaderboard-container"><p>Loading leaderboard...</p></div>;
  if (error) return <div className="leaderboard-container"><p className="error">Error: {error}</p></div>;

  const currentUserRank = getCurrentUserRank();
  const currentUserData = getCurrentUserData();
  const currentUserEmail = currentUser?.email || '';

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h1>🏆 Leaderboard</h1>
        <p>Top performers on AI Learning Labs</p>
      </div>

      {currentUserData && (
        <div className="user-stats">
          <div className="stat-box">
            <p className="stat-label">Your Rank</p>
            <p className="stat-value">#{currentUserRank}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Total Score</p>
            <p className="stat-value">{currentUserData.totalScore}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Quizzes Completed</p>
            <p className="stat-value">{currentUserData.quizzesCompleted}</p>
          </div>
          <div className="stat-box">
            <p className="stat-label">Average Score</p>
            <p className="stat-value">{currentUserData.averagePercentage}%</p>
          </div>
        </div>
      )}

      <div className="rankings-section">
        <h2>Top Rankings</h2>
        
        {rankings.length === 0 ? (
          <p className="no-data">No ranking data available yet.</p>
        ) : (
          <div className="rankings-table">
            <div className="table-header">
              <div className="rank-col">Rank</div>
              <div className="name-col">User</div>
              <div className="score-col">Total Score</div>
              <div className="quizzes-col">Quizzes</div>
              <div className="avg-col">Average %</div>
            </div>

            {rankings.map((user, index) => (
              <div 
                key={user.userId} 
                className={`table-row ${currentUserEmail === user.userEmail ? 'current-user' : ''}`}
              >
                <div className="rank-col">
                  {index === 0 && <span className="medal">🥇</span>}
                  {index === 1 && <span className="medal">🥈</span>}
                  {index === 2 && <span className="medal">🥉</span>}
                  {index > 2 && <span>#{index + 1}</span>}
                </div>
                <div className="name-col">
                  <div className="user-name">{user.userName}</div>
                  <div className="user-email">{user.userEmail}</div>
                </div>
                <div className="score-col">
                  <span className="badge">{user.totalScore}</span>
                </div>
                <div className="quizzes-col">{user.quizzesCompleted}</div>
                <div className="avg-col">
                  <div className="percentage-bar">
                    <div 
                      className="percentage-fill" 
                      style={{ width: `${user.averagePercentage}%` }}
                    ></div>
                  </div>
                  <span className="percentage-text">{user.averagePercentage}%</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="leaderboard-actions">
        <button className="btn btn-primary" onClick={() => navigate('/topics')}>
          Back to Topics
        </button>
        <button className="btn btn-secondary" onClick={() => window.location.reload()}>
          Refresh
        </button>
      </div>
    </div>
  );
}

export default Leaderboard;