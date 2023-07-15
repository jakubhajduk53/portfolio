import classNames from "classnames";

function Anchor({ className, href, value, icon: Icon }) {
  const anchorClasses = classNames(
    "flex items-center justify-center text-sm sm:text-base md:text-lg md:hover:text-orange-800 md:hover:bg-transparent",
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
