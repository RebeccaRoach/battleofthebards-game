import React, { useContext } from 'react';
import {GameContext} from '../App';

const Poem = () => {

  const game = useContext(GameContext);

  return (
    <div className="poem-container">
      <div className="inner-p-c">
        <div className="card">
          <div className="card-header">
            <h4>{game.currentPoem.title}</h4>
            <p>by {game.currentPoem.author}, {game.currentPoem.year}</p>
          </div>
          <div className="card-body">
            <div>
              <pre><span className="card-text">{game.currentPoem.text}</span></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Poem;
