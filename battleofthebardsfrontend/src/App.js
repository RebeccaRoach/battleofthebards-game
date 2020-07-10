import React, { useState } from 'react';
import PoemFrame from "./components/PoemFrame";
import PoemData from './data/poems.json';
import './App.css';

// TODO: helper function to track num guesses per question

// TODO: helper function to check if guess is correct, adds score

export const GameContext = React.createContext();

const App = () => {

  // TODO: take in desired number of poems as param???
  const shufflePoems = () => {
    let poemsArray = PoemData;

    // Shuffle thanks to: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for (let i = poemsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = poemsArray[i]
      poemsArray[i] = poemsArray[j]
      poemsArray[j] = temp
    }
    
    return poemsArray;
  }

   // initialize state with read poems, unread poems, and current poem
   const [readPoems, setReadPoems] = useState([]);
   const [unreadPoems, setUnreadPoems] = useState(shufflePoems);
   const [currentPoem, setCurrentPoem] = useState(unreadPoems[0]);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Battle of the Bards</h2>
        {/* <button onClick={shufflePoems}>GET POEMS</button> */}
      </header>
      <p>CURRENT POEM:</p>
      <div>{currentPoem.title}</div>
      <PoemFrame />
      {/* FOOTER */}
      <div class="mt-5 pt-5 pb-5 footer">
        <div class="container">
          <div class="row mt-5">
            <div class="col copyright">
              <p>Made by Becca</p>
              <p><small>© 2020. All Rights Reserved.</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
