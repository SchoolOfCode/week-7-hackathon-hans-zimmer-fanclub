import Flashcard from "../Flashcards/Flashcard.jsx";

function FlashcardContainer({ testArray }) {
  return (
    <div className="flashcard-container">
      {testArray.map((index) => (
        <Flashcard
          key={index.id}
          question={index.question}
          answer={index.answer}
        />
      ))}
    </div>
  );
}

export default FlashcardContainer;
// <Flashcard/>
