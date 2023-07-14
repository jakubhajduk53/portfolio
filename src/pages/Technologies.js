import Technology from "../components/Technology";
import { FaReact } from "react-icons/fa";

function Technologies() {
  return (
    <div
      id="technologies"
      className="flex flex-col items-center justify-center text-center gap-10 w-full h-screen  bg-red-50"
    >
      <div className="flex flex-col justify-center items-center pt-10 gap-5">
        <div>
          <p className="text-2xl">Technologies I have learned</p>
        </div>
        <Technology name="React" date="2023" icon={FaReact} />
      </div>
    </div>
  );
}

export default Technologies;
