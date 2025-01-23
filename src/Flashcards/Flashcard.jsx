import { useState } from "react";

function Flashcard({ question, answer }) {
  const [isQuestion, setIsQuestion] = useState(true);

  function ToggleCard() {
    setIsQuestion(!isQuestion);
  }

  return <button onClick={ToggleCard}>{isQuestion ? question : answer}</button>;
}

export default Flashcard;
