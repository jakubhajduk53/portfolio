import Anchor from "./Anchor";
import { headerData } from "../data";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-center sm:justify-around w-full p-2 sm:p-0 sm:pr-3 sm:h-16 z-10 sticky top-0 bg-cornsilk shadow-md">
      <div className="ml-5 text-2xl md:text-3xl self-center">Jakub Hajduk</div>
      <div className="flex flex-wrap justify-between sm:gap-5">
        {headerData.map((headerInfo) => {
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
