import { ComponentPropsWithoutRef, ReactNode } from "react";

type LabelProps = {
  isValid: boolean;
  children: ReactNode;
} & ComponentPropsWithoutRef<"label">;

export default function Label({
  isValid,
  children,
  ...labelProps
}: LabelProps) {
  return (
    <label
      {...labelProps}
      className={`${isValid ? "text-red-500" : "text-inherit"}`}
    >
      {children}
    </label>
  );
}
