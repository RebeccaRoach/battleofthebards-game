import React from 'react';
import PoemData from '../data/poems.json'

const Poem = () => {
  return (
    <div className="poem-card">
      {PoemData.map((poem, index) => {
        return <div className="card">
          <div className="card-header">
            <h4>{poem.title}</h4>
            <p>by {poem.author}, {poem.year}</p>
          </div>
          <div className="card-body">
            <div>
              <pre><span className="card-text">{poem.text}</span></pre>
            </div>
          </div>
        </div>
      })}
    </div>
  );
}

export default Poem;
