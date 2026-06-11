import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import API_URL from '../config';
import './Topics.css';

function Topics() {
  const navigate = useNavigate();
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    const fetchTopics = async () => {
      try {
        const response = await fetch(`${API_URL}/topics`);
        const data = await response.json();
        setTopics(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching topics:', error);
        setLoading(false);
      }
    };

    fetchTopics();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login');
  };

  if (loading) return <div className="topics-container"><p>Loading topics...</p></div>;

  return (
    <div className="topics-container">
      <div className="topics-top-bar">
        <div className="topics-header">
          <h1>AI Learning Topics</h1>
          <p>Welcome, {user?.name || 'Learner'}!</p>
        </div>
        <div className="top-bar-buttons">
          <button 
            className="btn-lab"
            onClick={() => navigate('/neural-network-lab')}
          >
            🧠 Neural Lab
          </button>
          <button 
            className="btn-leaderboard"
            onClick={() => navigate('/leaderboard')}
          >
            🏆 Leaderboard
          </button>
          <button 
            className="btn-logout"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>

      <div className="topics-grid">
        {topics.map((topic) => (
          <div key={topic.id} className="topic-card">
            <h3>{topic.title}</h3>
            <p>{topic.description}</p>
            <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
              {topic.difficulty}
            </span>
            <div className="topic-actions">
              <button 
                className="btn-learn"
                onClick={() => navigate(`/learn/${topic.id}`)}
              >
                Learn
              </button>
              <button 
                className="btn-quiz"
                onClick={() => navigate(`/quiz/${topic.id}`)}
              >
                Take Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Topics;