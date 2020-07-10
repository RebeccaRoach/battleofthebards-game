import React, { useState } from 'react';
import PoemData from '../data/poems.json';

const Clue = () => {
  return (
    // Carousel here??
    <div className="clue-container">
      {PoemData.map((poem) => {
        return <div>
          <p>{poem.questions.map((q) => {
            return (
              <div class="col-sm-6">
                <div class="card">
                  <div class="card-body">
                    <p class="card-text">{q.clue1}</p>
                  </div>
                </div>
              </div>
            )
          })}</p>
        </div>
      })}
    </div>
  );
}

export default Clue;
