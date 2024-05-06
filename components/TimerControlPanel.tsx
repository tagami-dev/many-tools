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
          className="bg-white text-black text-4xl w-16 h-16 rounded-full"
          onClick={onStart}
        >
          分
        </button>
        <button
          className="bg-white text-black text-4xl w-16 h-16 rounded-full"
          onClick={onStop}
        >
          秒
        </button>
        <button
          className="bg-white text-black text-sm w-16 h-16 rounded-full"
          onClick={onStop}
        >
          リセット
        </button>
        <button
          className="bg-white text-black text-sm w-16 h-16 rounded-full"
          onClick={onReset}
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
