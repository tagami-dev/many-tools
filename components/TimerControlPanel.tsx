import { time } from "console";
import React from "react";

interface TimerControlPanelProps {
  time: number; // sec
  isRunning: boolean;
  setTimer: (newTime: number) => void;
  resetTimer: () => void;
  startTimer: () => void;
  stopTimer: () => void;
}

const TimerControlPanel = (props: TimerControlPanelProps) => {
  const { time, isRunning, setTimer, resetTimer, startTimer, stopTimer } =
    props;

  return (
    <div className="h-28 w-full rounded-[40px] flex items-center justify-center">
      <div className="flex justify-around gap-8">
        <button
          className="bg-white text-black text-4xl w-16 h-16 rounded-full"
          onClick={() => setTimer(time + 60)}
        >
          分
        </button>
        <button
          className="bg-white text-black text-4xl w-16 h-16 rounded-full"
          onClick={() => setTimer(time + 1)}
        >
          秒
        </button>
        <button
          className="bg-white text-black text-sm w-16 h-16 rounded-full"
          onClick={() => resetTimer()}
        >
          リセット
        </button>
        <button
          className="bg-white text-black text-sm w-16 h-16 rounded-full"
          onClick={() => {
            isRunning ? stopTimer() : startTimer();
          }}
        >
          <div className="flex flex-col">
            <div>スタート</div>
            <div>ストップ</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TimerControlPanel;
