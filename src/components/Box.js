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
  const boxClasses = classNames(
    "grid justify-items-center place-items-center border rounded-xl w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 sm:text-lg md:text-xl",
    boxType === "Hobby" ? "hover:bg-slate-200" : "bg-red-100 hover:bg-red-200",
    isActive ? "bg-slate-200" : null,
    className
  );

  return (
    <div
      className={boxClasses}
      onClick={onClick}
      tabIndex={boxType === "Hobby" ? 0 : null}
    >
      <div className="grid justify-items-center gap-2">
        {Icon && <Icon className="shrink-0 text-xl sm:text-2xl md:text-3xl" />}
        {value}
        {boxType === "Technology" ? (
          <p className="text-base sm:text-lg md:text-xl">Started in: {date}</p>
        ) : null}
      </div>
    </div>
  );
}

export default Box;
