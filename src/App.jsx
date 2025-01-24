import "./App.css";
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer.jsx";
import Headers from "./Headers/Headers.jsx";
import { useState } from "react";

import Footer from "./Footer/Footer.jsx";
import Form from "./Form/form.jsx";

function App() {
  const [testArray, setTestArray] = useState([
    {
      id: 1,
      question: "Why do we capitalise React component functions?",
      answer: "To differentiate them from HTML components",
    },
    {
      id: 2,
      question: "Which movie was Hans Zimmer's 100th score",
      answer: "The Last Samurai (2003)",
    },
  ]);

  function mutateArray(questionValue, answerValue) {
    //copy test array
    const clonedTestArray = [...testArray];

    //access last id present in testArray
    const cardId = clonedTestArray[clonedTestArray.length - 1].id + 1;
    const newCard = {
      id: cardId,
      question: questionValue,
      answer: answerValue,
    };
    //Append new values to the existing array
    setTestArray([...clonedTestArray, newCard]);
  }

  return (
    <>
      <Headers />
      <Form mutateArray={mutateArray} />
      <FlashcardContainer testArray={testArray} />
      <Footer />
    </>
  );
}

export default App;
