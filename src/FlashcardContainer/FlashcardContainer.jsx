import Flashcard from "../Flashcards/Flashcard.jsx";

function FlashcardContainer({testArray}) {
    
  return (
    <div>
  {testArray.map((index) =>  <Flashcard question={index.question} answer={index.answer} /> )}
    </div>
  );
}

export default FlashcardContainer;
  // <Flashcard/>