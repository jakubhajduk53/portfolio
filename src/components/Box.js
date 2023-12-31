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
    "w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 sm:text-lg",
    "transition-colors cursor-pointer"
  );
  const technologyClasses = classNames(
    "w-20 h-32 sm:w-24 sm:h-32 md:w-36 md:h-36 xl:w-48 xl:h-48 sm:text-base"
  );
  const boxClasses = classNames(
    "grid justify-items-center place-items-center rounded-xl shadow-md",
    "text-sm md:text-xl hover:bg-vanilla",
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
        {Icon && <Icon className="shrink-0 text-3xl md:text-5xl" />}
        {value}
        {boxType === "Technology" ? (
          <p className=" sm:text-base md:text-xl">Started in: {date}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Box;
