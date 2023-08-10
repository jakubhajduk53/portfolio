import Anchor from "./Anchor";
import { headerDescriptions } from "../data/descriptions";

function Header() {
  return (
    <div className="flex justify-around w-full h-32 pb-3 sm:pb-0 sm:h-16 pr-3 z-10 bg-cornsilk sticky top-0 shadow-md">
      <div className="ml-5 text-3xl self-center select-none">Jakub Hajduk</div>
      <div className="flex flex-col justify-between sm:flex-row gap-1 sm:gap-5">
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
