import React from "react";

interface TimerControlPanelProps {
  onStart?: () => void;
  onStop?: () => void;
  onReset?: () => void;
}
const TimerControlPanel = (props: TimerControlPanelProps) => {
  const { onStart, onStop, onReset } = props;

  return (
    <div className="h-28 w-full rounded-[40px] flex items-center justify-center">
      <div className="flex justify-around gap-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={onStart}
        >
          Start
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          onClick={onStop}
        >
          Stop
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          onClick={onReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default TimerControlPanel;
