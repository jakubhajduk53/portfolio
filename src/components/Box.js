import classNames from "classnames";

function Box({
  className,
  value,
  icon: Icon,
  isActive,
  onClick,
  date,
  boxType,
}) {
  const hobbyClasses = classNames(
    "hover:bg-slate-200 w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 sm:text-lg cursor-pointer hover:bg-vanilla transition-colors border-vanilla"
  );
  const technologyClasses = classNames(
    "bg-yellow-100/20 hover:bg-yellow-100 w-20 h-32 sm:w-24 sm:h-32 md:w-36 md:h-36 sm:text-base"
  );
  const boxClasses = classNames(
    "grid justify-items-center place-items-center border rounded-xl text-sm md:text-xl shadow-md",
    boxType === "Hobby" ? hobbyClasses : technologyClasses,
    isActive ? "bg-vanilla" : "bg-cornsilk",
    className
  );

  return (
    <div
      className={boxClasses}
      onClick={onClick}
      tabIndex={boxType === "Hobby" ? 0 : null}
    >
      <div className="grid justify-items-center gap-2">
        {Icon && <Icon className="shrink-0 text-2xl sm:text-2xl md:text-3xl" />}
        {value}
        {boxType === "Technology" ? (
          <p className=" sm:text-base md:text-xl">Started in: {date}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Box;
