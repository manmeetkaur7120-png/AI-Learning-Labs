import React from 'react';
import '../styles/TopicCard.css';

function TopicCard({ topic, onLearn, onQuiz }) {
  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner':
        return 'green';
      case 'Intermediate':
        return 'orange';
      case 'Advanced':
        return 'red';
      default:
        return 'blue';
    }
  };

  return (
    <div className="topic-card">
      <div className="card-header">
        <h3>{topic.name}</h3>
        <span className={`difficulty ${getDifficultyColor(topic.difficulty)}`}>
          {topic.difficulty}
        </span>
      </div>
      <p className="description">{topic.description}</p>
      <div className="card-meta">
        <span className="duration">⏱️ {topic.duration} mins</span>
        <span className="questions">❓ {topic.questionsCount || 0} Questions</span>
      </div>
      <div className="card-buttons">
        <button className="learn-btn" onClick={onLearn}>
          📚 Learn
        </button>
        <button className="quiz-btn" onClick={onQuiz}>
          🧠 Take Quiz
        </button>
      </div>
    </div>
  );
}

export default TopicCard;