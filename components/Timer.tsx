'use client'

import React, { useEffect, useState } from 'react'

const Timer = () => {

    const tenDaysInSeconds = 10 * 24 * 60 * 60 * 1000; // 10 days in milliseconds
  const targetTime = new Date().getTime() + tenDaysInSeconds; // Current time + 10 days

  const [timeLeft, setTimeLeft] = useState(tenDaysInSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date().getTime();
      const remainingTime = targetTime - currentTime;

      if (remainingTime <= 0) {
        clearInterval(interval);
      } else {
        setTimeLeft(remainingTime);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the timer when component unmounts
  }, [targetTime]);

  const getFormattedTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = totalSeconds % 60;

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  return (
    <div>
        <h2 className='text-black text-[1.5rem]'>Countdown: {getFormattedTime(timeLeft)}</h2>
    </div>
  )
}

export default Timer