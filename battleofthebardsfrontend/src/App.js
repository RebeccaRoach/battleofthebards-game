import React, { useState } from 'react';
import PoemFrame from "./components/PoemFrame";
import PoemData from './data/poems.json';
import StartPage from "./components/StartPage";
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
  const [gameStarted, setGameStarted] = useState(false);

  const replay = () => {
    setUnreadPoems(shufflePoems);
    setCurrentPoem(unreadPoems[0]);
    setClueBank(6);
    setScore(0);
    setGameStarted(true);
    console.log("GS");
    console.log(gameStarted);
    console.log("Score");
    console.log(score);
    console.log("clueBank");
    console.log(clueBank);

  }

  const startGame = () => {
    setGameStarted(true);
  }

  // const reset = () => {
  //   setGameStarted(false);
  //   setUnreadPoems(shufflePoems);
  //   setCurrentPoem(unreadPoems[0]);
  //   setClueBank(6);
  //   setScore(0);
  // }

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
      { gameStarted ? (
          <div>
            {/* RENDER OUT POEM FRAME OR RESULTS PAGE */}
            { currentPoem ? (
              <div>
                <h6 className="game-title-fixed">Battle of the Bards</h6>
                <PoemFrame />
              </div>
            ) : <ResultsPage score={score} replay={replay} />}
          </div>
        ) : (
          <div>
            {/* SHOW PAGE TO START GAME */}
            <StartPage startGame={startGame}/>
          </div> )}
        {/* FOOTER */}
        <div class="footer">
          <div class="container">
            <div class="centered row mt-4">
              <div class="col copyright">
                <p>Game by Becca</p>
                <p><small>© 2020. Made w/ 💜.</small></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </GameContext.Provider>
  );
}

export default App;
