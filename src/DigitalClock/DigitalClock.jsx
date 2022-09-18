import React, {useEffect, useState} from 'react'
import { Clock} from './DigitalClockElements';
import './Font.css';

const DigitalClock = () => {
    let time = new Date().toLocaleTimeString();
    let date = new Date().toLocaleDateString();
    const [currentTime, setCurrentTime] = useState(time);

    useEffect(() => {
        const updateTime = () => {
            let time = new Date().toLocaleTimeString();
            setCurrentTime(time);
        }
    
        setInterval(updateTime, 1000);
    })


  return (
    <div>
        <Clock>Time : {currentTime} <br/> Date : {date} </Clock>
    </div>
  )
}

export default DigitalClock