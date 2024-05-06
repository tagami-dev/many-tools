import TimerControlPanel from "./TimerControlPanel";
import TimerDisplay from "./TimerDisplay";

interface TimerDisplayProps {}

const Timer = (props: TimerDisplayProps) => {
  return (
    <div className="w-[400px] h-[350px]">
      <div
        className={`w-full h-full rounded-[80px] bg-orange-400 p-5 flex flex-col items-center justify-center gap-3`}
      >
        <div className="text-2xl">Timer</div>
        <TimerDisplay time={360} />
        <TimerControlPanel />
      </div>
    </div>
  );
};

export default Timer;
