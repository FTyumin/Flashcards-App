import React, { useState } from 'react';
import '../../css/flashcard.css'

const data = [
  { question: 'What is the capital of France?', answer: 'Paris' },
  { question: 'What is 2 + 2?', answer: '4' },
  
]


function Flash() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/app/flashcards/');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  const handleNextCard = () => {
    setShowAnswer(false);
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <>
      <div className="flashcards-app">
        <h1>Flashcards App</h1>
        <div className="flashcard">
          <div className="flashcard-content">
            {flashcards.map((flashcard) => (
              <div key={flashcard.id}>
                <h3>Question:</h3>
                <p>{flashcard.question}</p>
              </div>
            ))}
          </div>

          <div className="flashcard-content">
            {flashcards.map((flashcard) => (
              <div key={flashcard.id}>
                <h3>Answer:</h3>
                <p>{flashcard.answer}</p>
              </div>
            ))}
          </div>

        </div>
        <div className="button-container">
          <button onClick={handleShowAnswer}>Show Answer</button>
          <button onClick={handleNextCard}>Next Card</button>
          <button>Add Card</button>
        </div>
      </div>
    </>
  );
}

export default Flash;
