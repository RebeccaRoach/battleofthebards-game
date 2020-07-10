import React, { useState } from 'react';
import PoemData from '../data/poems.json';

const Question = () => {

  const [guess, setGuess] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setGuess(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // to ensure users can't input empty guess
    // TODO: make submit button grayed out instead?
    if (guess === "") {
      alert("Please enter something to make a valid guess.");
      return;
    };

    // clear for next guess
    setGuess("");
  }

  return (
    <div className="question-container">
      {PoemData.map((poem) => {
        return <div>
          <p>{poem.questions.map((q) => {
            return (
              <div>
                <p>{q.text}</p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your answer"
                    name="userAnswer"
                    onChange={handleChange}
                    value={guess}
                  />
                  <input value="submit" type="submit" className="btn-dark"/>
                </form>
              </div>
            )
          })}</p>
        </div>
      })}
    </div>
  );
}

export default Question;