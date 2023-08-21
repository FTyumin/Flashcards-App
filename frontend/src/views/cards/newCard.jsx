import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AddCard from './addCard';
import FlashcardList from './flashcardlist';

function NewCard() {
  // State to hold the flashcards
  const [flashcards, setFlashcards] = useState([]);

  // Function to fetch flashcards from the server
  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/app/flashcards/');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  }

  // UseEffect hook to fetch flashcards 
  useEffect(() => {
    fetchFlashcards();
  }, []);

  // Function to handle adding a new flashcard
  const handleAddFlashcard = async (newFlashcard) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/app/flashcards/', newFlashcard);
      setFlashcards([...flashcards, response.data]);
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  
  return (
    <div className="flashcards-app">
      <h1>Flashcards App</h1>
      {/* Component to add new flashcards */}
      <AddCard onAdd={handleAddFlashcard} />
      {/* Component to display the list of flashcards */}
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default NewCard;
