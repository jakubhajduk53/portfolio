import classNames from "classnames";

function Hobby({ className, value, icon: Icon, isActive, onClick }) {
  const hobbyClasses = classNames(
    "flex flex-col items-center justify-center border rounded-xl w-36 h-36 text-xl gap-1 hover:bg-slate-200",
    isActive ? "bg-slate-200" : null,
    className
  );

  return (
    <div className={hobbyClasses} onClick={onClick}>
      {Icon && <Icon className="shrink-0 text-3xl" />}
      {value}
    </div>
  );
}

export default Hobby;
