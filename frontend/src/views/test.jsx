// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

import AddCard from './newCards';
import FlashcardList from './flashcardlist';

function Test() {
  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('/app/flashcards/');
      setFlashcards(response.data);
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const handleAddFlashcard = async (newFlashcard) => {
    try {
      const response = await axios.post('/app/flashcards/', newFlashcard);
      setFlashcards([...flashcards, response.data]);
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  return (
    <div className="flashcards-app">
      <h1>Flashcards App</h1>
      <AddCard onAdd={handleAddFlashcard} />
      <FlashcardList flashcards={flashcards} />
    </div>
  );
}

export default Test;
