import Box from "../components/Box";
import { technologiesData } from "../data";

function Technologies() {
  return (
    <div
      id="technologies"
      className="grid content-center w-full h-screen overflow-y-scroll md:overflow-auto"
    >
      <div className="grid pt-10 gap-5 text-center justify-items-center place-items-center">
        <p className="text-xl md:text-3xl mb-5">Technologies I have learned</p>
        <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7 gap-5">
          {technologiesData.map((technology) => {
            return (
              <Box
                key={technology.value}
                value={technology.value}
                date={technology.date}
                icon={technology.icon}
                boxType="Technology"
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;
