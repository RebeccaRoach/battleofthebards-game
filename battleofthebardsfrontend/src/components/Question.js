import React from 'react';
import PoemData from '../data/poems.json'

const Question = () => {
  return (
    <div className="App">
      {PoemData.map((poem) => {
        return <div>
          <p>{poem.questions.map((q) => {
            return (
              <div>
                <p>{q.text}</p>
                {/* FIGURE OUT HOW TO CAPTURE INPUTS AND SUBMIT */}
                <input />
                <button className="btn-dark">Submit</button>
              </div>
            )
          })}</p>
        </div>
      })}
    </div>
  );
}

export default Question;