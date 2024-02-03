import React, { useState } from 'react';
import '../CSS/home.css'

const Home = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date())
  }, 1000);

  return (<>
    <div className="home-page">
      <div className="components">
        <div className="hi-i-m-ayush typewriter ">
          <div className='type'>Hi, I'm Ayush.</div>
        </div>
        <div className="home-introduction w-100 h-50">
          <div className='window-div'>
            <div className="window">
              <div className="bluebar">
                <div className="icons">
                  <img className="bluebar-cross" src="Bluebar_cross.svg" />
                  <img className="bluebar-maximize" src="Bluebar_maximize.svg" />
                  <img className="bluebar-minimize" src="Bluebar_minimize.svg" />
                </div>
              </div>
              <img className="img-20230317173130-1" src="Me.jpg" />
            </div>
          </div>
          <div className="left-side">
            <div
              className='introduction-text'
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, molestiae harum explicabo blanditiis incidunt a assumenda. Ratione animi alias officia.
            </div>
            <div className="button-div">
              <div className="button btn btn-tertiary btn-lg">
                <div className="learn-more">
                  <span>
                    <span className="learn-more-span btn-text">L</span>
                    <span className="learn-more-span2 btn-text">earn More</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-education">
          <div
            className='education-text'
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo amet, accusantium quo molestias necessitatibus ipsa totam quae aliquid quia nihil.
          </div>
          <div className="button-separation">
            <div className="home-education-title">
              <div className="education">EDUCATION</div>
              <img className="education-image" src="Microsoft-Computer.gif" />
            </div>
            <div className="btn btn-tertiary btn-lg ">
              <div className="learn-more">
                <span>
                  <span className="learn-more-span3">L</span>
                  <span className="learn-more-span4">earn More</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav
      className="fixed-bottom navbar navbar-expand-lg navbar-dark justify-content-between mt-3">
      <ul className="navbar-nav navbar-nav-hover flex-row align-items-center">
        <li className="nav-item">
          <a href="../assets/Pages/blog.jsx" className="nav-link" role="button">
            <span className="nav-link-inner-text">📺 Start</span>
          </a>
        </li>
        <li className="nav-item">
          <a href="../docs/introduction.html" className="nav-link"
            role="button">
            <span
              className="nav-link-inner-text">📕 Documentation</span>
          </a>
        </li>
      </ul>
      <div className="time text-center">
        <span className="time text-uppercase">{time.toLocaleTimeString()}</span>
      </div>
    </nav>
  </>
  )
}

export default Home