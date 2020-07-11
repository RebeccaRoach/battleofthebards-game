import React, { useState, useContext } from 'react';
import { GameContext } from '../App';

const Question = ({ question, onSuccess }) => {

  const game = useContext(GameContext);
  const [guess, setGuess] = useState("");

  const checkAnswer = (answer) => {

    if (guess === "") {
      alert("Please enter something to make a valid guess.");
      return;
    } else if (answer === question.answer) {
      // bootstrap toast message instead of alert?
      alert("You guessed correctly!");
      onSuccess();
      game.setScore(game.score + question.score);
    } else {
      alert("Try again!");
      // TODO: with toast message say how many clues they have left??
    }
  }

  const handleChange = (e) => {
    setGuess(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkAnswer(guess);

    // clear for next guess
    setGuess("");
  }

  return (
    <div className="question-container">
      <div>
        <div>
          <p>{question.text}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your answer"
              name="userAnswer"
              onChange={handleChange}
              value={guess}
            />
            <input value="submit" type="submit" className="btn-dark" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Question;