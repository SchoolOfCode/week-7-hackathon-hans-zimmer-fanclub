import { useState } from "react";

// How do I capture user input?
// Where does user input come from? (button/form/input?)

//capture with state
//Add the text that is given into the current state as a new value

// How do I add value to an array?
//dunno
//setTest array

// Populate in app.jsx in the testArray
//when this state is updated, it should update the dom

function Form({ mutateArray }) {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  function handleSubmit() {
    mutateArray(questionValue, answerValue);
  }
  return (
    <>
      <input
        type="text"
        id="cardQuestion"
        onInput={(e) => setQuestionValue(e.target.value)}
      ></input>
      <input
        type="text"
        id="cardAnswer"
        onInput={(e) => setAnswerValue(e.target.value)}
      ></input>
      <button onClick={handleSubmit}></button>
    </>
  );
}

export default Form;
