import React from 'react';
import '../styles/QuestionCard.css';

function QuestionCard({ question, options, selectedAnswer, onAnswerSelect }) {
  return (
    <div className="question-card">
      <div className="question-header">
        <h3>{question}</h3>
      </div>
      <div className="options-list">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedAnswer === index ? 'selected' : ''}`}
            onClick={() => onAnswerSelect(index)}
          >
            <span className="option-letter">
              {String.fromCharCode(65 + index)}.
            </span>
            <span className="option-text">{option}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;