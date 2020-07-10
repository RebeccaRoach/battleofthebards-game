import React, { useState }from 'react';
import Poem from './Poem'
import Question from './Question'
import Clue from './Clue'

// loops into App state context to conditionally render stateful things in this component (not other children)

const PoemFrame = () => {

  const [displayedPoemQuestion, setDisplayedPoemQuestion] = useState(false);
  const [displayClues, setDisplayClues] = useState(0);

  const getQuestion = () => {
    setDisplayedPoemQuestion(true);
  }

  const getClue = () => {
    if (displayClues == 0) {
      setDisplayClues(1);
    }
  }
  
  const handleClick = () => {
    // TODO: figure out how to advance the poem frame based on game context
    console.log("Clicked!");
  }

  return (
    <div className="poem-frame-container">
      <div className="row">
        <div className="column">
          <Poem />
        </div>
        <div className="column">
          {displayedPoemQuestion && <Question />}
          {!displayedPoemQuestion && <button onClick={getQuestion} className="pizazz-btn">Show Question</button>}
          {displayedPoemQuestion && <button onClick={getClue} className="pizazz-btn">Show Clue</button>}
          {displayClues == 1 ? <Clue /> : ""}
          <div className="next-container">
            <input onClick={handleClick} className="advance-arrow" type="image" src="https://img.icons8.com/nolan/64/circled-chevron-right.png" />
            {/* <input className="back-arrow" type="image" src="https://img.icons8.com/nolan/72/circled-chevron-left.png" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoemFrame;