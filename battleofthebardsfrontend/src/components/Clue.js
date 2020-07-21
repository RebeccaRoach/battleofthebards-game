import React, { useContext } from 'react';
import { GameContext } from '../App';

const Clue = ({ displayClues }) => {

  const game = useContext(GameContext);
  const currentQuestion = game.unreadPoems[0].questions[0];

  return (
    <div className="clue-container">
      <div>
        <div>
        {currentQuestion.clues.slice(0, displayClues).map((clue) => (
          <div class="card">
            <div class="card-body">
              <p class="card-text">
                <p>{clue.text}</p>
             </p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default Clue;
