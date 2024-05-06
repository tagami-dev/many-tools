import { useState, useEffect } from "react";

export const useTimer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const setTimer = (newTime: number) => {
    if (!isRunning) {
      setTime(newTime);
    }
  };

  const resetTimer = () => {
    setTime(0);
    setIsRunning(false);
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  };

  const stopTimer = () => {
    if (isRunning && timerId) {
      clearInterval(timerId);
      setIsRunning(false);
      setTimerId(null);
    }
  };

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setTime((prevTime) => {
          if (prevTime <= 0) {
            clearInterval(id);
            setIsRunning(false);
            alert("Time's up!");
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
      setTimerId(id);
    }
  };

  useEffect(() => {
    return () => {
      if (timerId) {
        clearInterval(timerId);
      }
    };
  }, [timerId]);

  return { time, isRunning, setTimer, resetTimer, startTimer, stopTimer };
};
