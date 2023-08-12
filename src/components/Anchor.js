import classNames from "classnames";

function Anchor({ className, href, value, icon: Icon }) {
  const anchorClasses = classNames(
    "flex items-center justify-center gap-1 w-[50%] sm:w-auto pt-1 pb-1",
    "text-lg md:text-xl md:hover:text-carrot-orange transition-colors select-none",
    className
  );

  return (
    <a href={href} className={anchorClasses}>
      {Icon && <Icon />}
      {value}
    </a>
  );
}

export default Anchor;
