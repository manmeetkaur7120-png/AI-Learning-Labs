import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API_URL from '../config';
import './Learn.css';

function Learn() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [topic, setTopic] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTopic = async () => {
      try {
        const response = await fetch(`${API_URL}/topics`);
        if (!response.ok) throw new Error('Failed to fetch topics');
        const data = await response.json();
        const selectedTopic = data.find(t => t.id === parseInt(topicId));
        
        if (!selectedTopic) {
          throw new Error('Topic not found');
        }
        
        setTopic(selectedTopic);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTopic();
  }, [topicId]);

  if (loading) return <div className="learn-container"><p>Loading topic...</p></div>;
  if (error) return <div className="learn-container"><p className="error">Error: {error}</p></div>;
  if (!topic) return <div className="learn-container"><p>Topic not found</p></div>;

  return (
    <div className="learn-container">
      <button className="btn-back" onClick={() => navigate('/topics')}>
        ← Back to Topics
      </button>

      <div className="learn-header">
        <h1>{topic.title}</h1>
        <span className={`difficulty ${topic.difficulty.toLowerCase()}`}>
          {topic.difficulty}
        </span>
      </div>

      <div className="learn-content">
        {/* STEP 1: Video Tutorial */}
        <div className="section">
          <div className="section-number">1</div>
          <div className="section-content">
            <h2>📹 Video Tutorial</h2>
            <p className="section-description">Watch comprehensive video explanations to understand the topic</p>
            <div className="video-placeholder">
              <div className="placeholder-icon">🎥</div>
              <p>Video playlist coming soon</p>
              <p className="placeholder-subtitle">20+ tutorial videos available</p>
            </div>
          </div>
        </div>

        {/* STEP 2: PDF Notes */}
        <div className="section">
          <div className="section-number">2</div>
          <div className="section-content">
            <h2>📄 PDF Notes</h2>
            <p className="section-description">Download comprehensive study notes and reference materials</p>
            <div className="pdf-section">
              <div className="pdf-card">
                <div className="pdf-icon">📄</div>
                <h3>Complete Topic Guide</h3>
                <p>Full notes and explanations</p>
                <button className="btn-download" disabled>
                  Download (Coming Soon)
                </button>
              </div>
              <div className="pdf-card">
                <div className="pdf-icon">📋</div>
                <h3>Video Transcripts</h3>
                <p>All video transcripts in text</p>
                <button className="btn-download" disabled>
                  Download (Coming Soon)
                </button>
              </div>
              <div className="pdf-card">
                <div className="pdf-icon">📊</div>
                <h3>Cheat Sheet</h3>
                <p>Quick reference guide</p>
                <button className="btn-download" disabled>
                  Download (Coming Soon)
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 3: Summary */}
        <div className="section">
          <div className="section-number">3</div>
          <div className="section-content">
            <h2>📝 Summary</h2>
            <p className="section-description">Brief overview of the key concepts</p>
            <div className="summary-box">
              <p className="summary-text">
                {topic.summary || topic.description}
              </p>
            </div>
          </div>
        </div>

        {/* STEP 4: Key Points */}
        <div className="section">
          <div className="section-number">4</div>
          <div className="section-content">
            <h2>🎯 Key Points</h2>
            <p className="section-description">Important concepts you should know</p>
            <ul className="key-points-list">
              <li>Comprehensive coverage of {topic.title}</li>
              <li>Interactive examples and exercises</li>
              <li>Real-world applications and use cases</li>
              <li>Best practices and industry standards</li>
              <li>Advanced concepts and extensions</li>
              <li>Common mistakes to avoid</li>
              <li>Resources for further learning</li>
            </ul>
          </div>
        </div>

        {/* STEP 5: Games */}
        <div className="section">
          <div className="section-number">5</div>
          <div className="section-content">
            <h2>🎮 Interactive Games</h2>
            <p className="section-description">Learn through fun and engaging games</p>
            <div className="games-grid">
              <div className="game-card">
                <div className="game-icon">🧩</div>
                <h3>Concept Matching</h3>
                <p>Match terms with definitions</p>
                <button className="btn-play" disabled>Play (Coming Soon)</button>
              </div>
              <div className="game-card">
                <div className="game-icon">❓</div>
                <h3>Quick Quiz</h3>
                <p>Fast-paced multiple choice</p>
                <button className="btn-play" disabled>Play (Coming Soon)</button>
              </div>
              <div className="game-card">
                <div className="game-icon">🎯</div>
                <h3>Challenge Mode</h3>
                <p>Test your advanced knowledge</p>
                <button className="btn-play" disabled>Play (Coming Soon)</button>
              </div>
              <div className="game-card">
                <div className="game-icon">⏱️</div>
                <h3>Timed Challenge</h3>
                <p>Beat the clock</p>
                <button className="btn-play" disabled>Play (Coming Soon)</button>
              </div>
              <div className="game-card">
                <div className="game-icon">🏆</div>
                <h3>Leaderboard Race</h3>
                <p>Compete with other learners</p>
                <button className="btn-play" disabled>Play (Coming Soon)</button>
              </div>
            </div>
          </div>
        </div>

        {/* STEP 6: Quiz */}
        <div className="section">
          <div className="section-number">6</div>
          <div className="section-content">
            <h2>✅ Assessment Quiz</h2>
            <p className="section-description">Test your knowledge with our comprehensive quiz</p>
            <div className="quiz-info">
              <div className="info-box">
                <span className="info-label">Questions:</span>
                <span className="info-value">8</span>
              </div>
              <div className="info-box">
                <span className="info-label">Time Limit:</span>
                <span className="info-value">15 minutes</span>
              </div>
              <div className="info-box">
                <span className="info-label">Difficulty:</span>
                <span className="info-value">{topic.difficulty}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Points:</span>
                <span className="info-value">100</span>
              </div>
            </div>
            <button 
              className="btn btn-quiz"
              onClick={() => navigate(`/quiz/${topic.id}`)}
            >
              📝 Start Quiz
            </button>
          </div>
        </div>

        {/* Progress Tracker */}
        <div className="progress-section">
          <h2>📊 Your Progress</h2>
          <div className="progress-bar-container">
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '33%' }}></div>
            </div>
            <p className="progress-text">33% Complete - You're doing great! 🎉</p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="action-buttons">
          <button 
            className="btn btn-primary"
            onClick={() => navigate('/topics')}
          >
            ← Back to Topics
          </button>
          <button 
            className="btn btn-secondary"
            onClick={() => navigate(`/quiz/${topic.id}`)}
          >
            Go to Quiz →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Learn;