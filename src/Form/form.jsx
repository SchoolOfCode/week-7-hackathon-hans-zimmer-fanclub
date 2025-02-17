import { useState } from "react";

// How do I capture user input?
// Where does user input come from? (button/form/input?)

//capture with state
//Add the text that is given into the current state as a new value

// How do I add value to an array?
//dunno
//setTest array style="color: green;"

// Populate in app.jsx in the testArray
//when this state is updated, it should update the dom

function Form({ mutateArray }) {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswerValue] = useState("");

  function handleSubmit() {
    mutateArray(questionValue, answerValue);
  }
  return (
    <div className="form-container">
      <div>
        <label htmlFor="cardQuestion" style={{ color: "lightblue"}}  >Question: </label>
        <input
          type="text"
          id="cardQuestion"
          onInput={(e) => setQuestionValue(e.target.value)}
        ></input>
      </div>
      <div>
        <label htmlFor="cardAnswer" style={{ color: "lightblue"}}>Answer: </label>
        <input
          type="text"
          id="cardAnswer"
          onInput={(e) => setAnswerValue(e.target.value)}
        ></input>
      </div>
      <button className="form-button" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default Form;
