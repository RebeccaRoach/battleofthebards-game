import React, { useState, useContext } from 'react';
import {GameContext} from '../App';

const Clue = () => {

  const game = useContext(GameContext);

  return (
    // Carousel here??
    <div className="clue-container">
      <div>
        <p>{game.currentPoem.questions.map((q) => {
          return (
            <div>
              <div class="card">
                <div class="card-body">
                  <p class="card-text">{q.clues.map((clue) => {
                    return (
                      <p>{clue.text}</p>
                    )
                  })}</p>
                </div>
              </div>
            </div>
          )
        })}</p>
      </div>
    </div>
  );
}

export default Clue;
