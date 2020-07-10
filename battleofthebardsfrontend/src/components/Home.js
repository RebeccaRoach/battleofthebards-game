import React from 'react';
import Poem from './Poem'
import Question from './Question'
// import './App.css';

const Home = () => {
  return (
    <div className="App">
      <Poem />
      <Question />
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

export default Home;