import React, { useState, useContext } from 'react';
import { GameContext } from '../App';

const Question = ({ question, handleQuestionAnswered, onSuccess }) => {

  const [guess, setGuess] = useState("");
  const game = useContext(GameContext);

  const checkAnswer = (answer) => {
    const user_answer = answer.toLowerCase();
    const answered_correct_results = question.answers.filter(entry => entry.toLowerCase() === user_answer);

    if (answered_correct_results.length > 0) {
      handleQuestionAnswered(true);
      game.setScore(game.score + question.score);
      setTimeout(() => { onSuccess(); }, 3000);
    } else {
      handleQuestionAnswered(false);
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
            <input value="Submit" type="submit" className="submit-answer-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Question;