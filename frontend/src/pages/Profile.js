import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Profile.css';

function Profile() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const response = await axios.get(`http://localhost:5000/api/users/${userId}`);
      setProfile(response.data);
      setFormData(response.data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch profile');
      setLoading(false);
      console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSaveProfile = async () => {
    try {
      const userId = localStorage.getItem('userId');
      await axios.put(`http://localhost:5000/api/users/${userId}`, formData);
      setProfile(formData);
      setIsEditing(false);
      alert('Profile updated successfully!');
    } catch (err) {
      setError('Failed to update profile');
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    navigate('/');
  };

  if (loading) return <div className="loading">Loading profile...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!profile) return <div className="error">Profile not found</div>;

  return (
    <div className="profile-container">
      <nav className="navbar">
        <div className="navbar-content">
          <h1 className="logo">AI Learning Lab</h1>
          <div className="nav-buttons">
            <button className="nav-btn" onClick={() => navigate('/dashboard')}>Dashboard</button>
            <button className="nav-btn logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

      <div className="profile-content">
        <div className="profile-header">
          <img src={profile.avatar || 'https://via.placeholder.com/150'} alt={profile.username} className="avatar" />
          <div className="header-info">
            <h2>{profile.username}</h2>
            <p className="email">{profile.email}</p>
            <p className="joined">Joined {new Date(profile.createdAt).toLocaleDateString()}</p>
          </div>
          <button className="edit-btn" onClick={() => setIsEditing(!isEditing)}>
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="profile-stats">
          <div className="stat-card">
            <h4>Total Points</h4>
            <p className="stat-value">{profile.totalPoints}</p>
          </div>
          <div className="stat-card">
            <h4>Quizzes Completed</h4>
            <p className="stat-value">{profile.quizzesCompleted}</p>
          </div>
          <div className="stat-card">
            <h4>Current Streak</h4>
            <p className="stat-value">🔥 {profile.currentStreak}</p>
          </div>
          <div className="stat-card">
            <h4>Rank</h4>
            <p className="stat-value">#{profile.rank}</p>
          </div>
        </div>

        {isEditing ? (
          <div className="edit-form">
            <h3>Edit Profile</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                name="username"
                value={formData.username || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email || ''}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label>Bio</label>
              <textarea
                name="bio"
                value={formData.bio || ''}
                onChange={handleInputChange}
                rows="4"
              ></textarea>
            </div>
            <button className="save-btn" onClick={handleSaveProfile}>Save Changes</button>
          </div>
        ) : (
          <div className="profile-info">
            <h3>About</h3>
            <p>{profile.bio || 'No bio added yet'}</p>

            <h3>Learning Progress</h3>
            <div className="progress-items">
              {profile.completedTopics && profile.completedTopics.map((topic, index) => (
                <div key={index} className="progress-item">
                  <span className="topic-name">{topic.name}</span>
                  <span className="completion-badge">✓ Completed</span>
                </div>
              ))}
            </div>

            <h3>Achievements</h3>
            <div className="achievements">
              {profile.badges && profile.badges.map((badge, index) => (
                <div key={index} className="achievement-badge">
                  <span className="badge-emoji">{badge.emoji}</span>
                  <span className="badge-name">{badge.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile;