import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Home.css';

function Home({ onLogin }) {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setError(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      
      const payload = isLogin 
        ? { email: formData.email, password: formData.password }
        : { name: formData.name, email: formData.email, password: formData.password };

      console.log('🚀 Sending request to:', `http://localhost:5000${endpoint}`);
      console.log('📦 Payload:', payload);

      const response = await fetch(`http://localhost:5000${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      console.log('📡 Response Status:', response.status);
      
      const data = await response.json();
      console.log('📥 Response Data:', data);

      if (!response.ok) {
        setError(data.message || 'Something went wrong');
        setLoading(false);
        return;
      }

      // ✅ Login/Register successful
      setSuccess(data.message);
      
      // Save to localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('userId', data.user.id);
      localStorage.setItem('userName', data.user.name);

      console.log('✅ Saved to localStorage');
      console.log('🔐 Token:', data.token);
      console.log('👤 User ID:', data.user.id);
      console.log('📝 User Name:', data.user.name);

      // Call parent onLogin function
      if (onLogin) {
        onLogin(data.token, data.user.id);
      }

      // Redirect to topics after 500ms
      setTimeout(() => {
        console.log('🔄 Redirecting to /topics');
        navigate('/topics');
      }, 500);

    } catch (err) {
      console.error('❌ Error:', err);
      setError('Failed to connect to server. Make sure backend is running on port 5000');
      setLoading(false);
    }
  };

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1>🤖 AI Learning Lab</h1>
          <p>Master Artificial Intelligence & Machine Learning</p>
        </div>

        <div className="auth-form-container">
          <div className="auth-toggle">
            <button 
              className={isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(true);
                setFormData({ name: '', email: '', password: '' });
                setError(null);
                setSuccess(null);
              }}
              type="button"
            >
              Login
            </button>
            <button 
              className={!isLogin ? 'active' : ''}
              onClick={() => {
                setIsLogin(false);
                setFormData({ name: '', email: '', password: '' });
                setError(null);
                setSuccess(null);
              }}
              type="button"
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && (
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  required={!isLogin}
                />
              </div>
            )}

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            {error && <div className="error-message">❌ {error}</div>}
            {success && <div className="success-message">✅ {success}</div>}

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? '⏳ Processing...' : (isLogin ? '🔓 Login' : '📝 Sign Up')}
            </button>
          </form>

          <div className="demo-info">
            <p><strong>Demo Credentials:</strong></p>
            <p>Email: john@test.com</p>
            <p>Password: test123</p>
          </div>
        </div>

        <div className="features-section">
          <h2>✨ Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>📚 Learn</h3>
              <p>Structured AI & ML courses</p>
            </div>
            <div className="feature-card">
              <h3>🧠 Quiz</h3>
              <p>Test your knowledge</p>
            </div>
            <div className="feature-card">
              <h3>🔬 Lab</h3>
              <p>Neural Network experiments</p>
            </div>
            <div className="feature-card">
              <h3>🏆 Leaderboard</h3>
              <p>Compete with others</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;