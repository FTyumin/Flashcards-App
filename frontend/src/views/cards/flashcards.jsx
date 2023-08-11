import React, { useState } from 'react';
import '../../css/flashcard.css'

const data = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 2 + 2?', answer: '4' },
  
];

function Flash() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="flashcards-app">
      <h1>Flashcards App</h1>
      <div className="flashcard">
        <div className="flashcard-content">
          <h3>Question:</h3>
          <p>{data[currentCardIndex].question}</p>
        </div>
        {showAnswer && (
          <div className="flashcard-content">
            <h3>Answer:</h3>
            <p>{data[currentCardIndex].answer}</p>
          </div>
        )}
      </div>
      <div className="button-container">
        <button onClick={handleShowAnswer}>Show Answer</button>
        <button onClick={handleNextCard}>Next Card</button>
        <button>Add Card</button>
      </div>
    </div>
  );
}

export default Flash;
