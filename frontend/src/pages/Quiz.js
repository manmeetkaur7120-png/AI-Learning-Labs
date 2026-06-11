import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API_URL from '../config';
import './Quiz.css';

function Quiz() {
  const { quizId } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch quiz on mount
  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await fetch(`${API_URL}/quizzes/topic/${quizId}`);
        if (!response.ok) throw new Error('Failed to fetch quiz');
        const data = await response.json();
        setQuiz(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [quizId]);

  const handleAnswerSelect = (questionId, optionIndex) => {
    setAnswers({
      ...answers,
      [questionId]: optionIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = async () => {
    try {
      // First, submit quiz to get results
      const response = await fetch(`${API_URL}/quizzes/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          quizId: quiz.id,
          answers: answers
        })
      });

      if (!response.ok) throw new Error('Failed to submit quiz');
      const data = await response.json();
      
      // Get user info from localStorage
      const user = JSON.parse(localStorage.getItem('user'));
      
      // Save score to backend
      await fetch(`${API_URL}/scores/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userId: user.id || 1,
          userName: user.name || 'User',
          userEmail: user.email || 'user@test.com',
          quizId: quiz.id,
          quizTitle: quiz.title,
          score: data.score,
          total: data.total,
          percentage: data.percentage
        })
      });
      
      setResults(data);
      setShowResults(true);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) return <div className="quiz-container"><p>Loading quiz...</p></div>;
  if (error) return <div className="quiz-container"><p className="error">Error: {error}</p></div>;
  if (!quiz) return <div className="quiz-container"><p>Quiz not found</p></div>;

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-section">
          <h2>Quiz Results</h2>
          <div className="score-display">
            <p className="score">{results.percentage}%</p>
            <p className="score-text">{results.score} out of {results.total} correct</p>
          </div>

          <div className="results-details">
            {results.results.map((result, index) => (
              <div key={index} className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                <h4>Question {index + 1}: {result.question}</h4>
                <p><strong>Your Answer:</strong> {result.userAnswer !== undefined ? result.userAnswer : 'Not answered'}</p>
                <p><strong>Correct Answer:</strong> {result.correct}</p>
                <p className="explanation"><strong>Explanation:</strong> {result.explanation}</p>
              </div>
            ))}
          </div>

          <div className="results-buttons">
            <button className="btn btn-primary" onClick={() => navigate('/topics')}>
              Back to Topics
            </button>
            <button className="btn btn-success" onClick={() => navigate('/leaderboard')}>
              View Leaderboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = quiz.questions[currentQuestion];

  return (
    <div className="quiz-container">
      <div className="quiz-header">
        <h2>{quiz.title}</h2>
        <p>Question {currentQuestion + 1} of {quiz.questions.length}</p>
      </div>

      <div className="progress-bar">
        <div 
          className="progress" 
          style={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
        ></div>
      </div>

      <div className="question-section">
        <h3>{question.question}</h3>
        <div className="options">
          {question.options.map((option, index) => (
            <label key={index} className="option-label">
              <input
                type="radio"
                name={`question-${question.id}`}
                checked={answers[question.id] === index}
                onChange={() => handleAnswerSelect(question.id, index)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="quiz-navigation">
        <button 
          className="btn btn-secondary" 
          onClick={handlePrevious}
          disabled={currentQuestion === 0}
        >
          Previous
        </button>

        <div className="question-counter">
          {Object.keys(answers).length} / {quiz.questions.length} answered
        </div>

        {currentQuestion === quiz.questions.length - 1 ? (
          <button 
            className="btn btn-success" 
            onClick={handleSubmit}
            disabled={Object.keys(answers).length !== quiz.questions.length}
          >
            Submit Quiz
          </button>
        ) : (
          <button 
            className="btn btn-primary" 
            onClick={handleNext}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default Quiz;