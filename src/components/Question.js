import React, { useEffect, useState } from "react";

function Question({ question, onAnswered }) {
  const [timeRemaining, setTimeRemaining] = useState(10);

  useEffect(() => {
    if (timeRemaining === 0) {
      onAnswered(false);
      setTimeRemaining(10);
      return;
    }

    const timeout = setTimeout(() => {
      setTimeRemaining((t) => t - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timeRemaining, onAnswered]);

  return (
    <section>
      <h2>{question.prompt}</h2>
      <h5>{timeRemaining} seconds remaining</h5>
      <ul>
        {question.answers.map((answer) => (
          <li key={answer}>
            <button
              onClick={() => {
                onAnswered(answer === question.correctAnswer);
                setTimeRemaining(10);
              }}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Question;

