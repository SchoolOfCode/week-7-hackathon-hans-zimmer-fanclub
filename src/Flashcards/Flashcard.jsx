import React from "react";
import { useState } from "react";

// When user clicks on button, answer appears

//import useState
// Button clicked
//Has button been clicked
// Text changed to answer
// Answer now appears on button

// var for question
// var for answer

let question = "Does this button work?";
let answer = "Yes it does!";

//add onClick with is true is false statement

function Flashcard() {
  const [isQuestion, setIsQuestion] = useState(true);

  function ToggleCard() {
    setIsQuestion(!isQuestion);
  }
  return <button onClick={ToggleCard}>{isQuestion ? question : answer}</button>;
}

export default Flashcard;
