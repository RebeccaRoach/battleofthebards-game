import React, { useState, useContext } from 'react';
import Poem from './Poem';
import Question from './Question';
import Clue from './Clue';
import { GameContext } from '../App';
import customButtonImg from '../images/icons8-next-page-64.png';

const PoemFrame = () => {

  const [displayedPoemQuestion, setDisplayedPoemQuestion] = useState(false);
  // for current poem's clues
  const [displayClues, setDisplayClues] = useState(0);
  const game = useContext(GameContext);

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

  const advanceNextPoem = () => {
    // advancing through next poems in the game
    // update unread poems to show poem #2-3

    setDisplayedPoemQuestion(false);
    const sliced = game.unreadPoems.slice(1);
    game.setUnreadPoems(sliced);
    game.setCurrentPoem(sliced[0]);
    setDisplayClues(0);
  }

  return (
    <div className="poem-frame-container">
      <div className="row">
        <div className="column">
          <Poem />
        </div>
        <div className="column">
          {displayedPoemQuestion && <Question question={game.currentPoem.questions[0]} onSuccess={advanceNextPoem} />}
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