import React, { useState } from 'react';
import PoemFrame from "./components/PoemFrame";
import PoemData from './data/poems.json';
import ResultsPage from "./components/ResultsPage";
import './App.css';

export const GameContext = React.createContext();

const App = () => {

  const shufflePoems = () => {
    let poemsArray = PoemData;

    // Shuffle thanks to: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    for (let i = poemsArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i)
      const temp = poemsArray[i]
      poemsArray[i] = poemsArray[j]
      poemsArray[j] = temp
    }

    // 3 poems per game
    const gamePoems = poemsArray.slice(0, 3)
    return gamePoems;
  }

   // initialize unread poems, current poem, clue bank, and score
   const [unreadPoems, setUnreadPoems] = useState(shufflePoems);
   const [currentPoem, setCurrentPoem] = useState(unreadPoems[0]);
   const [clueBank, setClueBank] = useState(6);
   const [score, setScore] = useState(0);

  return (
    <GameContext.Provider value={{
      unreadPoems,
      currentPoem,
      clueBank,
      score,
      setUnreadPoems,
      setCurrentPoem,
      setClueBank,
      setScore
    }}>
      <div className="App">
        <header className="App-header">
          <h2>Battle of the Bards</h2>
        </header>
        { currentPoem ? (
          <div>
            <PoemFrame />
          </div>
        ) : <ResultsPage score={score}/>}
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
    </GameContext.Provider>
  );
}

export default App;
