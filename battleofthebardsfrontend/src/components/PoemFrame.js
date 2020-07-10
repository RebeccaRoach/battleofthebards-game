import React from 'react';
import Poem from './Poem'
import Question from './Question'
import Clue from './Clue'
// import './App.css';

// loops into App state context to conditionally render stateful things in this component (not other children)

const PoemFrame = (poem) => {
  return (
    <div className="poem-frame-container">
      <div className="row">
        <div className="column">
          <Poem />
        </div>
        <div className="column">
          <Question />
          <button className="pizazz-btn">Question</button>
          <h4>Clue Section:</h4>
          <Clue />
        </div>
      </div>
    </div>
  );
}

export default PoemFrame;