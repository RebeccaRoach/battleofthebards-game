import React, { useContext } from 'react';
import { GameContext } from '../App';

const Poem = () => {

  const game = useContext(GameContext);
  const currentPoem = game.unreadPoems[0];

  return (
    <div className="poem-container">
      <div className="inner-p-c">
        <div className="card">
          <div className="card-header">
            <h4>{currentPoem.title}</h4>
            <p className="poem-author">by {currentPoem.author}, {currentPoem.year}</p>
          </div>
          <div className="card-body">
            <div className="poem-text">
              <span className="card-text">{currentPoem.text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poem;
