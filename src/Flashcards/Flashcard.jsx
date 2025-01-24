import { useState } from "react";

function Flashcard({ question, answer }) {
  const [isQuestion, setIsQuestion] = useState(true);

  function ToggleCard() {
    setIsQuestion(!isQuestion);
  }

  return (
    <div>
      <button className="flashcard" onClick={ToggleCard}>
        {isQuestion ? question : answer}
      </button>
    </div>
  );
}

export default Flashcard;
