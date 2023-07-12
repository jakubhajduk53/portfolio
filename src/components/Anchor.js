import classNames from "classnames";

function Anchor({ className, href, value, icon: Icon }) {
  const anchorClasses = classNames(
    "flex items-center justify-center gap-1 md:text-lg hover:text-orange-800",
    className
  );

  return (
    <a href={href} className={anchorClasses}>
      {Icon && <Icon className="shrink-0" />}
      {value}
    </a>
  );
}

export default Anchor;
