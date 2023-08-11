const FlashcardList = ({ flashcards }) => {
    return (
      <div>
        <h2>Flashcards List</h2>
        <ul>
          {flashcards.map((flashcard) => (
            <li key={flashcard.id}>
              <strong>Question:</strong> {flashcard.question}, <strong>Answer:</strong> {flashcard.answer}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default FlashcardList;

  
 
     

  
  
  
  
  
  