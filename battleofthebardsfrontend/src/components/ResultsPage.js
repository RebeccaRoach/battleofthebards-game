import React from 'react';

const ResultsPage = ({score, replay}) => {

  return (
    <div className="castle-showing">
      <h1>You finished the game!</h1>
      <p>Your score is: {score}</p>
      <div>
        <img src="https://37.media.tumblr.com/7ebde6a9544b5b9d6e06f65ee51d4cc5/tumblr_n1q73u5OZ91qd67vio2_250.gif" alt="Robin Williams quote from Dead Poets Society" />
      </div>
      <h6>Parting is such sweet sorrow...</h6>
      <button class="pizazz-btn" onClick={replay}>Play Again</button>
    </div>
  );
}

export default ResultsPage;
