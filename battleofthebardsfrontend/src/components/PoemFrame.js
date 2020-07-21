import React, { useState, useContext } from 'react';
import Poem from './Poem';
import Question from './Question';
import Clue from './Clue';
import { GameContext } from '../App';
import customButtonImg from '../images/icons8-next-page-64.png';
import Toast from 'react-bootstrap/Toast';

const PoemFrame = () => {

  const [showToast, setShowToast] = useState(false);
  const [correctText, setCorrectText] = useState(false);
  const [displayedPoemQuestion, setDisplayedPoemQuestion] = useState(false);
  const game = useContext(GameContext);
  let currentPoem = game.unreadPoems[0];
  // for current poem's clues
  const [displayClues, setDisplayClues] = useState(0);

  const getQuestion = () => {
    setDisplayedPoemQuestion(true);
  }

  const getClue = () => {
    if (game.clueBank < 1) {
      alert('No more clues!');
    } else {
      setDisplayClues(displayClues + 1);
      game.setClueBank(game.clueBank - 1);
    }
  }

  const handleQuestionAnswered = (resultBool) => {
    if (resultBool) {
      setCorrectText(true);
    } else {
      setCorrectText(false);
    }
    setShowToast(true);
  }

  const advanceNextPoem = () => {
    // advancing through next poems in the game
    // update unread poems to show poem #2-3

    setDisplayedPoemQuestion(false);
    const sliced = game.unreadPoems.slice(1);
    game.setUnreadPoems(sliced);
    setDisplayClues(0);
  }

  return (
    <div className="poem-frame-container">
      <Toast
        style={{
          position: 'absolute',
          top: 31,
          right: 460,
          maxWidth: 500,
          zIndex: '1',
        }}
        onClose={() => setShowToast(false)}
        show={showToast}
        delay={3000} autohide
      >
        <Toast.Header>
          <strong className="mr-auto">{correctText ? "Huzzah!" : "Try, try again!"}</strong>
        </Toast.Header>
        <Toast.Body>{correctText ? `You just bested this ${currentPoem.questions[0].score}-point question. 🏆` : `This question is worth ${currentPoem.questions[0].score} points. You have ${game.clueBank} clues left.`}</Toast.Body>
      </Toast>
      <div className="row">
        <div className="column">
          <Poem />
        </div>
        <div className="column">
          {displayedPoemQuestion && <Question question={currentPoem.questions[0]} handleQuestionAnswered={handleQuestionAnswered} onSuccess={advanceNextPoem} />}
          {!displayedPoemQuestion && <button onClick={getQuestion} id="question-btn" className="pizazz-btn">Show Question</button>}
          {displayedPoemQuestion && <button onClick={getClue} className="pizazz-btn">Show Clue</button>}
          <Clue displayClues={displayClues} />
          <div className="advance-arrow-div">
            <input onClick={advanceNextPoem} className="advance-arrow" type="image" src={customButtonImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoemFrame;