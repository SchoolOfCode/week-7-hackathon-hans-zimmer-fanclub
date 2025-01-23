import "./App.css";
import FlashcardContainer from "./FlashcardContainer/FlashcardContainer.jsx";
import Headers from "./Headers/Headers.jsx";
import { useState } from "react";

import Footer from "./Footer/Footer.jsx";

function App() {
  const [testArray, setTestArray] = useState([
    {
      question: "heloo",
      answer: "goodbye",
    },
    {
      question: "heloo",
      answer: "goodbye",
    },
  ]);

  return (
    <>
      <Headers />
      <FlashcardContainer testArray={testArray} />
      <Footer />
    </>
  );
}

export default App;
