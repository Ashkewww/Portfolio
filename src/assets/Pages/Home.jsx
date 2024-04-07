import { useState } from 'react';
import '../CSS/home.css';
import textData from '../texts/source-texts.json';


const Home = () => {
    const [time, setTime] = useState(new Date());
    setInterval(() => {
        setTime(new Date());
    }, 1000);
    return (<>
        <div className="home-page">
            <div className="components pb-100">
                <div className="hi-i-m-ayush typewriter w-26">
                    <div className='type'>{textData['Main-Title']}</div>
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
                            {textData['Introduction-text']}
                        </div>
                        <div className='row justify-content-between w-60'>
                            <div className="col button-div pr-10">
                                <div className="button btn btn-tertiary btn-lg" onClick={() => window.open(textData['Github-URL'])}>
                                    <div className="learn-more">
                                        <span>
                                            <span className="learn-more-span2 btn-text">{textData['Introduction-Button-Github']}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="col button-div">
                                <div className="button btn btn-tertiary btn-lg" onClick={() => window.open(textData['LinkedIn-URL'])}>
                                    <div className="learn-more">
                                        <span>
                                            <span className="learn-more-span2 btn-text">{textData['Introduction-Button-LinkedIn']}</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-education w-100">
                    <div className='education-div '>
                        <div
                            className='education-text text-right'
                        >
                            {textData['Educaton-Text']}
                        </div>
                    </div>

                    <div className="button-separation">
                        <div className="home-education-title d-flex flex-row justify-content-start">
                            <div className="education">{textData['Education-Title']}</div>
                            <img className="education-image" src="Education-Image.svg" />
                        </div>
                        <div className="button btn btn-tertiary btn-lg align-self-start ml-30" onClick={() => window.open(textData['Niet-Website'])}>
                            <div className="learn-more">
                                <span>
                                    <span className="learn-more-span4">{textData['Education-Button']}</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav
            className="fixed-top navbar navbar-expand-lg navbar-dark justify-content-between align-items-center">
            <div className="time text-center left-banner ">
                <div className="time text-uppercase text-light bg-dark animate-banner"><div>{textData.lorem160}</div></div>
            </div>
            <div className="time text-center time-banner">
                <div className="time text-uppercase text-tertiary font-weight-bold">{time.toLocaleTimeString()}</div>
            </div>
            <div className="time text-center right-banner">
                <div className="time text-uppercase text-light bg-dark animate-banner"><div>{textData.lorem160}</div></div>
            </div>
        </nav>
    </>
    )
}



export default Home;