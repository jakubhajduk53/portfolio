import classNames from "classnames";

function Hobby({ className, value, icon: Icon, isActive, onClick }) {
  const hobbyClasses = classNames(
    "grid justify-items-center place-items-center border rounded-xl w-36 h-36 text-xl hover:bg-slate-200",
    isActive ? "bg-slate-200" : null,
    className
  );

  return (
    <div className={hobbyClasses} onClick={onClick} tabIndex={0}>
      <div className="grid justify-items-center gap-2">
        {Icon && <Icon className="shrink-0 text-3xl" />}
        {value}
      </div>
    </div>
  );
}

export default Hobby;
