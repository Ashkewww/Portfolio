import { useState } from 'react';
import './assets/CSS/App.css'


function App() {

  return (
    <div class="home border-dark">
  <div class="components">
    <div class="home2">
      <div class="left-side">
        <div class="ayush-chandan">Ayush Chandan</div>
        <div class="software-engineer">Software Engineer</div>
        <div class="button-div">
          <div class="btn btn-md mr-2 mb-2 btn-primary button">
            <div class="learn-more">
              <span onClick={() => window.open('https://github.com/ashkewww')}>
                <span class="learn-more-span">L</span>
                <span class="learn-more-span2">earn More</span>
              </span>
            </div>
          </div>
        </div>
        <div class="frame-1">
          <div class="website-still-in-development">
            Website still in development
          </div>
          <img class="microsoft-computer-1" src="Microsoft-Computer.gif" />
        </div>
      </div>
      <div class="window card card-tertiary">
        <div class="bluebar">
          <div class="icons">
            <img class="bluebar-cross" src="Bluebar_cross.svg" />
            <img class="bluebar-maximize" src="Bluebar_maximize.svg" />
            <img class="bluebar-minimize" src="Bluebar_minimize.svg" />
          </div>
        </div>
        <img class="img-20230317173130-1" src="Me.jpg" />
      </div>
    </div>
  </div>
</div>

  )
}

export default App