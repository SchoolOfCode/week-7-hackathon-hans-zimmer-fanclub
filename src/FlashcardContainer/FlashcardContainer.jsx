import Flashcard from "../Flashcards/Flashcard.jsx";

function FlashcardContainer({ testArray }) {
  return (
    <div>
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
