'use client';
import { useState, useEffect } from 'react';

export const useCountDown = (initialTimeInSeconds) => {
  const [timeLeft, setTimeLeft] = useState(initialTimeInSeconds);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timerId);
    } else if (timeLeft <= 0) {
      setIsActive(false);
      // Optional: handle timer completion (e.g., trigger a callback)
    }
  }, [isActive, timeLeft]);

  const resetTimer = (newTimeInSeconds) => {
    setTimeLeft(newTimeInSeconds);
    setIsActive(true);
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  return {
    timeLeft,
    isActive,
    resetTimer,
    formattedTime: formatTime(timeLeft),
  };
};
