import React from 'react'
import '../CSS/Indu.css'

const Indu = () => {

    const onClickGif = () => {
        alert('Yes! I would love to be your valentine')
    }
    return (
        <div className='valentine-theme'>
            <div className='text-animate'>
                <h1>Would you be my valentine?</h1>
            </div>
            <div className='animate' onClick={() => onClickGif()}>
                <img src="heart-in-love.gif" alt="Gif" />
            </div>
        </div>
    )
}

export default Indu