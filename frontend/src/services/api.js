import axios from 'axios';

// Create axios instance with base configuration
const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include token in headers
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

// Topics API
export const topicsAPI = {
  getAllTopics: () => api.get('/topics'),
  getTopicById: (id) => api.get(`/topics/${id}`),
  createTopic: (data) => api.post('/topics', data),
  updateTopic: (id, data) => api.put(`/topics/${id}`, data),
  deleteTopic: (id) => api.delete(`/topics/${id}`),
};

// Quizzes API
export const quizzesAPI = {
  getQuizByTopicId: (topicId) => api.get(`/quizzes/${topicId}`),
  getQuizById: (id) => api.get(`/quizzes/quiz/${id}`),
  createQuiz: (data) => api.post('/quizzes', data),
  updateQuiz: (id, data) => api.put(`/quizzes/${id}`, data),
  deleteQuiz: (id) => api.delete(`/quizzes/${id}`),
};

// Quiz Results API
export const quizResultsAPI = {
  submitQuiz: (data) => api.post('/quiz-results', data),
  getResult: (id) => api.get(`/quiz-results/${id}`),
  getUserResults: (userId) => api.get(`/quiz-results/user/${userId}`),
  getAllResults: () => api.get('/quiz-results'),
};

// Users API
export const usersAPI = {
  getUserProfile: (userId) => api.get(`/users/${userId}`),
  updateUserProfile: (userId, data) => api.put(`/users/${userId}`, data),
  getUserStats: (userId) => api.get(`/users/${userId}/stats`),
  getAllUsers: () => api.get('/users'),
};

// Leaderboard API
export const leaderboardAPI = {
  getLeaderboard: (period = 'all-time') => api.get(`/leaderboard?period=${period}`),
  getUserRank: (userId) => api.get(`/leaderboard/rank/${userId}`),
};

// Experiments API
export const experimentsAPI = {
  getAllExperiments: () => api.get('/experiments'),
  getExperimentById: (id) => api.get(`/experiments/${id}`),
  runExperiment: (data) => api.post('/experiments/run', data),
  getExperimentResults: (userId) => api.get(`/experiments/results/${userId}`),
};

// Authentication API
export const authAPI = {
  login: (credentials) => api.post('/auth/login', credentials),
  register: (data) => api.post('/auth/register', data),
  logout: () => api.post('/auth/logout'),
  refreshToken: () => api.post('/auth/refresh-token'),
};

export default api;