import classNames from "classnames";

function Hobby({ className, value, icon: Icon, isActive, onClick }) {
  const hobbyClasses = classNames(
    "grid justify-items-center place-items-center border rounded-xl w-16 h-16 sm:w-24 sm:h-24 md:w-36 md:h-36 sm:text-lg md:text-xl hover:bg-slate-200",
    isActive ? "bg-slate-200" : null,
    className
  );

  return (
    <div className={hobbyClasses} onClick={onClick} tabIndex={0}>
      <div className="grid justify-items-center gap-2">
        {Icon && <Icon className="shrink-0 text-xl sm:text-2xl md:text-3xl" />}
        {value}
      </div>
    </div>
  );
}

export default Hobby;
