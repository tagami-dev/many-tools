import React from "react";

interface TimerDisplayProps {
  time: number; // ms
}

const TimerDisplay = (props: TimerDisplayProps) => {
  const { time } = props;

  return (
    <div className="h-36 bg-[#a5b2b1] w-full rounded-[40px] flex items-center justify-center">
      {time}
    </div>
  );
};

export default TimerDisplay;
