import TimerControlPanel from "./TimerControlPanel";
import TimerDisplay from "./TimerDisplay";
import { useTimer } from "@/hooks/useTimer";

interface TimerProps {}

const Timer = (props: TimerProps) => {
  const { time, isRunning, setTimer, resetTimer, startTimer, stopTimer } =
    useTimer();

  return (
    <div className="w-[400px] h-[350px]">
      <div
        className={`w-full h-full rounded-[80px] bg-orange-400 p-5 flex flex-col items-center justify-center gap-3`}
      >
        <div className="text-2xl">TANITA</div>
        <TimerDisplay time={time} />
        <TimerControlPanel
          time={time}
          isRunning={isRunning}
          setTimer={setTimer}
          resetTimer={resetTimer}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      </div>
    </div>
  );
};

export default Timer;
