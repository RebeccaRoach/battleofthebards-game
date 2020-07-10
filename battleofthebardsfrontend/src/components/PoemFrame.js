import React from 'react';
import Poem from './Poem'
import Question from './Question'
import Clue from './Clue'
// import './App.css';

// loops into App state context to conditionally render stateful things in this component (not other children)

const PoemFrame = (poem) => {
  return (
    <div className="App">
      <Poem />
      <Question />
      {/* <Clue /> */}
    </div>
  );
}

export default PoemFrame;