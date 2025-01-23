import React from "react";

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

function ToggleCard() {
  cosnt[(isQuestion, setIsQuestion)] = useState(true);

  if (isQuestion === true) {
    setIsQuestion = false;
  } else {
    setIsQuestion = false;
  }
}

//add onClick with is true is false statement

function Flashcard() {
  return <button onClick={ToggleCard}>{question}</button>;
}

export default Flashcard;
