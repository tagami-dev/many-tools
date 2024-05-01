import Timer from "@/components/Timer";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Timer />
      <Image src={"/timer_ui.jpg"} alt="timer image" width={400} height={300} />
    </div>
  );
}
