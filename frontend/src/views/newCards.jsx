import { useFlashcards } from "../hooks/useFlashcards";



function NewFlashcard() {
    const[flashcards, AddFlashcard] = useFlashcards()

    const handleAddFlashcard = () => {
        const front = prompt("Enter the front:")
        const back = prompt("Ener the back")
        if(front && back){
            AddFlashcard(front,back)
        }
            
    }
    return(
    <div>
        <button onClick={handleAddFlashcard}>Add Flashcard</button>
    </div>
    )
}



export default NewFlashcard;