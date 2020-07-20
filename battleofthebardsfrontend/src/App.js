import React, { useState, useEffect } from 'react';
import PoemFrame from "./components/PoemFrame";
import StartPage from "./components/StartPage";
import ResultsPage from "./components/ResultsPage";
import './App.css';
import axios from 'axios';

export const GameContext = React.createContext();

const App = () => {

  // new game initial state:
  const [poemsData, setPoemsData] = useState([]);
  const [unreadPoems, setUnreadPoems] = useState([]);
  const [nextAvailablePoem, setNextAvailablePoem] = useState(0);
  const [clueBank, setClueBank] = useState(6);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    // const API_BASE_URL = "http://localhost:8000/game/poems";
    // had to add / at the end to get around redirect (defaultRouter in Django REST adds trailing_slash)
    axios.get('http://localhost:8000/game/poems/')
      .then((response) => {
        let poemsData = response.data;
        // Shuffle thanks to: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
        for (let i = poemsData.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * i)
          const temp = poemsData[i]
          poemsData[i] = poemsData[j]
          poemsData[j] = temp
        }

        setPoemsData(poemsData);
        const batch = selectPoemBatch(poemsData);
        setUnreadPoems(batch);
      })
      .catch(() => {
        alert("Failed to fetch the poems");
      })
  }, [])

  const selectPoemBatch = (poemsData) => {
    // 3 poems per game
    const gamePoems = poemsData.slice(nextAvailablePoem, nextAvailablePoem + 3);
    setNextAvailablePoem(nextAvailablePoem + 3);
    return gamePoems;
  }

  const replay = () => {
    // two steps to ensure proper data being operated on in setter
    const batch = selectPoemBatch(poemsData);

    if (batch.length < 3) {
      alert("You played all the poems! Check back to play again later.");
      return;
    }

    setUnreadPoems(batch);
    setClueBank(6);
    setScore(0);
    setGameStarted(true);
  }

  const startGame = () => {
    setGameStarted(true);
  }

  return (
    <GameContext.Provider value={{
      unreadPoems,
      clueBank,
      score,
      setUnreadPoems,
      setClueBank,
      setScore
    }}>
      <div className="App">
      { gameStarted ? (
          <div>
            {/* RENDER OUT POEM FRAME OR RESULTS PAGE */}
            { unreadPoems[0] ? (
              <div>
                <h6 className="game-title-fixed">Battle of the Bards</h6>
                <PoemFrame />
              </div>
            ) : <ResultsPage score={score} replay={replay} />}
          </div>
        ) : (
          <div>
            {/* SHOW PAGE TO START GAME */}
            <StartPage buttonDisabled={poemsData.length === 0} startGame={startGame}/>
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
