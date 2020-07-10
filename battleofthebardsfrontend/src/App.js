import React from 'react';
import PoemFrame from "./components/PoemFrame"
import './App.css';

// helper function for Json.parse(json) to get array of shuffled poem objs
// from raw json, make the poem list of objects here
// use context with two arrays, one for unread poems, one for read poems

// helper function to track num guesses per question

// helper function to check if guess is correct
// and adds score

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Display a poem here:
        </p>
      </header>
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
