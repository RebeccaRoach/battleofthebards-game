import React, { useState, useContext } from 'react';
import { GameContext } from '../App';
import Toast from 'react-bootstrap/Toast';

const Question = ({ question, onSuccess }) => {

  const [showToast, setShowToast] = useState(false);
  const [correctText, setCorrectText] = useState(false);
  const [guess, setGuess] = useState("");
  const game = useContext(GameContext);

  const checkAnswer = (answer) => {
    const user_answer = answer.toLowerCase();
    const answered_correct_results = question.answer.filter(entry => entry.toLowerCase() === user_answer);

    if (answered_correct_results.length > 0) {
      setShowToast(true);
      setCorrectText(true);
      game.setScore(game.score + question.score);
      setTimeout(() => { onSuccess(); }, 3000);
    } else {
      setShowToast(true);
      setCorrectText(false);
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

  // "Please enter something to make a valid guess."

  return (
    <div className="question-container">
      <Toast onClose={() => setShowToast(false)} show={showToast} delay={4000} autohide>
        <Toast.Header>
          <strong className="mr-auto">{correctText ? "Huzzah!" : "Try, try again!"}</strong>
        </Toast.Header>
        <Toast.Body>{correctText ? `You just bested this ${question.score}-point question. 🏆` : `This question is worth ${question.score} points. You have ${game.clueBank} clues left.`}</Toast.Body>
      </Toast>
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