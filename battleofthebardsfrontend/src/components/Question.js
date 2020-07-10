import React, { useState } from 'react';
import PoemData from '../data/poems.json';

// to capture guess from input submission
// const [guess, setGuess] = useState(undefined);

const handleSubmit = (e) => {
  e.preventDefault();

  // to ensure users can't input empty guess
  // if (guess === "") {
  //   alert("Please enter something to make a valid guess.");
  //   return;
  // };

  console.log(`Guess is now: ${e.target.value}`);

  // clear for next guess
  // setGuess("");
}

const Question = () => {
  return (
    <div className="question-container">
      {PoemData.map((poem) => {
        return <div>
          <p>{poem.questions.map((q) => {
            return (
              <div>
                <p>{q.text}</p>
                {/* FIGURE OUT HOW TO CAPTURE INPUTS AND SUBMIT */}
                <input
                  type="text"
                  placeholder="Your answer"
                  name="userAnswer"
                >
                </input>
                <button
                  className="btn-dark" onClick={handleSubmit}>Submit</button>
              </div>
            )
          })}</p>
        </div>
      })}
    </div>
  );
}

export default Question;