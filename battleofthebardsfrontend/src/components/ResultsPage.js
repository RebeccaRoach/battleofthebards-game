import React from 'react';

const ResultsPage = ({score, replay}) => {

  return (
    <div className="results-page">
      <div className="spacing">
        <h1 className="finished">You finished the game!</h1>
        <p className="score">Your score is: {score}</p>
        <div>
          <img src="https://37.media.tumblr.com/7ebde6a9544b5b9d6e06f65ee51d4cc5/tumblr_n1q73u5OZ91qd67vio2_250.gif"
            alt="Robin Williams quote from Dead Poets Society"
            className="gif"
          />
        </div>
        <button class="pizazz-btn" onClick={replay}>Play Again</button>
        {/* <button class="pizazz-btn" onClick={reset}>Return home</button> */}
      </div>
    </div>
  );
}

export default ResultsPage;
