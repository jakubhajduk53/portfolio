import Anchor from "./Anchor";
import { headerDescriptions } from "../data/descriptions";

function Header() {
  return (
    <div className="flex justify-between w-full h-32 pb-3 sm:pb-0 sm:h-16 pr-3 z-10 bg-orange-50 sticky top-0">
      <div className="ml-5 text-2xl italic self-center">Jakub Hajduk</div>
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
