import React, { useState } from 'react';
import '../../css/flashcard.css';
import axios from 'axios'; 
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';




function Flash() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate();

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
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % flashcards.length);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const addCard = () => {
    navigate('/newcard')
  }

 

  

  const refreshList = () => {
    axios
      .get("http://localhost:8000/app/flashcards/")
      .then((res) => this.setState({ flashcards: res.data }))
      .catch((err) => console.log(err));
  };

  const handleDelete = (item) => {
    axios
      .delete(`http://localhost:8000/app/flashcards/${flashcards[currentCardIndex]?.id}/`)
      .then((res) => this.refreshList());
  };



  return (
    <>
      <div className="flashcards-app">
        <h1>Flashcards App</h1>
        <div className="flashcard">
          <div className="flashcard-content">
              <div key={flashcards[currentCardIndex]?.id}>
                <h3>Question:</h3>
                <p>{flashcards[currentCardIndex]?.question}</p>
              </div>
           
          </div>
          {showAnswer &&
          (<div className="flashcard-content">
            
              <div key={flashcards[currentCardIndex]?.id}>
                <h3>Answer:</h3>
                <p>{flashcards[currentCardIndex]?.answer}</p>
              </div>
    
          </div>)}
          

        </div>
        <div className="button-container">
          <button onClick={handleShowAnswer}>Show Answer</button>
          <button onClick={handleNextCard}>Next Card</button>
          <button onClick={addCard}>Add Card</button>
          <button onClick={handleDelete}>Delete Card</button>
        </div>
      </div>
    </>
  );
}

export default Flash;
