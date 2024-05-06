import { useState, useCallback, useMemo } from "react";

const formatDuration = (diffSecs: number): string => {
  const h = `0${Math.floor(diffSecs / 3600)}`.slice(-2); // Hours
  const m = `0${Math.floor((diffSecs % 3600) / 60)}`.slice(-2); // Minutes
  const s = `0${Math.floor(diffSecs % 60)}`.slice(-2); // Seconds
  return `${h}:${m}:${s}`;
};

export const useTimer = () => {
  // Units are in seconds
  const [duration, setDuration] = useState(0);
  const clock = useMemo(() => formatDuration(duration), [duration]);
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  const startTimer = useCallback(
    (startTime?: number) => {
      if (timerId === null) {
        // 開始時間がない場合は、現在時刻
        const onsetTime = startTime ?? Date.now();
        const id = setInterval(() => {
          const durationSecs = Math.floor((Date.now() - onsetTime) / 1000);
          setDuration(durationSecs);
        }, 100);
        setTimerId(id);
      }
    },
    [timerId]
  );

  const stopTimer = useCallback(() => {
    if (timerId) {
      clearInterval(timerId);
      setTimerId(null);
    }
  }, [timerId]);

  const resetTimer = useCallback(() => {
    stopTimer(); // Stop the timer first
    setDuration(0); // Reset duration to 0
  }, [stopTimer]);

  return { duration, clock, startTimer, resetTimer };
};
