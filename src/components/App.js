import React, { useState } from "react";
import Question from "./Question";
import questionsData from "../data/questions";

function App() {
  const [index, setIndex] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);

  const question = questionsData[index];

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setCorrectCount((count) => count + 1);
    }
    const nextIndex = index + 1;
    if (nextIndex < questionsData.length) {
      setIndex(nextIndex);
    } else {
      alert(`You finished! You got ${correctCount + (isCorrect ? 1 : 0)} right!`);
      setIndex(0);
      setCorrectCount(0);
    }
  }

  return (
    <main>
      <h1>Trivia Time!</h1>
      <h3>
        Score: {correctCount} / {questionsData.length}
      </h3>
      <Question question={question} onAnswered={handleAnswer} />
    </main>
  );
}

export default App;

