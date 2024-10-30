import { ReactNode } from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  type: "main" | "secondary";
  to: string;
  children: ReactNode;
  addedClass?: string;
};
const mainStyles =
  "border-black bg-black hover:bg-white hover:border-white hover:text-black";
const secondaryStyles = "border-white hover:bg-black hover:border-black";

export default function Button({
  type,
  children,
  addedClass,
  to,
}: ButtonProps) {
  addedClass = addedClass === undefined ? "" : addedClass;
  return (
    <Link
      to={to}
      className={`flex items-center gap-2 rounded-lg font-medium text-white border transition-all duration-300 py-4 ${
        type == "main" ? mainStyles : secondaryStyles
      } ${addedClass}`}
    >
      {children}
    </Link>
  );
}
