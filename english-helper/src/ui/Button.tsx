import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  style:
    | "mainBlack"
    | "secondaryBlack"
    | "mainWhite"
    | "secondaryWhite"
    | "colored";
  children: ReactNode;
  addedClass?: string;
  to?: string;
  onClick?: () => void;
} & ComponentPropsWithoutRef<"button">;

const stylesMap = new Map([
  [
    "mainBlack",
    "border-black bg-black text-white hover:bg-white hover:border-white hover:text-black",
  ],
  [
    "secondaryBlack",
    "border-black bg-black hover:border-white hover:bg-stone-900 text-white",
  ],
  [
    "mainWhite",
    "border-white hover:text-white hover:bg-black hover:border-black",
  ],
  ["secondaryWhite", "border-2 border-black text-black hover:bg-white "],
  ["colored", "border-2 border-black text-black bg-emerald-400 hover:bg-white"],
]);

export default function Button({
  style,
  children,
  addedClass,
  to,
  onClick,
}: ButtonProps) {
  addedClass = addedClass === undefined ? "" : addedClass;
  const stylesBtn = stylesMap.get(style);
  if (to === undefined)
    return (
      <button
        onClick={onClick}
        className={`flex items-center justify-center gap-2 rounded-lg font-medium  border transition-all duration-300 py-4 ${stylesBtn} ${addedClass}`}
      >
        {children}
      </button>
    );

  return (
    <Link
      to={to}
      className={`flex items-center justify-center gap-2 rounded-lg font-medium  border transition-all duration-300 py-4 ${stylesBtn} ${addedClass}`}
    >
      {children}
    </Link>
  );
}
