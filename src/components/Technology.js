import classNames from "classnames";

function Technology({ className, name, date, icon: Icon }) {
  const technologyClasses = classNames(
    "flex flex-col items-center justify-center border rounded-xl w-52 h-52 text-xl gap-1 bg-red-100 hover:bg-red-200",
    className
  );

  return (
    <div className={technologyClasses}>
      {Icon && <Icon className="shrink-0 text-3xl" />}
      <p>{name}</p>
      <p>Started in: {date}</p>
    </div>
  );
}

export default Technology;
