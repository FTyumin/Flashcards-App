import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import AddCard from '../views/newCards';
import FlashcardList from '../views/flashcardlist';

function App() {
  const [flashcards, setFlashcards] = useState([]);

  const fetchFlashcards = async () => {
    try {
      const response = await axios.get('/api/flashcards/');
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
      const response = await axios.post('/api/flashcards/', newFlashcard);
      setFlashcards([...flashcards, response.data]);
    } catch (error) {
      console.error('Error adding flashcard:', error);
    }
  };

  
}

export default App;