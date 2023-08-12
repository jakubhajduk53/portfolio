import Anchor from "./Anchor";
import { headerDescriptions } from "../data/descriptions";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-around w-full p-2 sm:p-0 sm:pr-3 sm:h-16 z-10 sticky top-0 bg-cornsilk shadow-md">
      <div className="ml-5 text-2xl md:text-3xl self-center select-none">
        Jakub Hajduk
      </div>
      <div className="flex flex-wrap justify-between sm:gap-5">
        {headerDescriptions.map((headerInfo) => {
          return (
            <Anchor
              key={headerInfo.value}
              href={headerInfo.href}
              value={headerInfo.value}
              icon={headerInfo.icon}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Header;
