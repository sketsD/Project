import React, { ComponentPropsWithoutRef } from "react";
import EyeSlash from "../../assets/svgs/VisibilityIcons/EyeSlash";
import EyeOpen from "../../assets/svgs/VisibilityIcons/EyeOpen";
import useToggle from "../../hooks/useToggle";

type PasswordFieldProps = {
  isValid: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export default function PasswordField({
  isValid,
  value,
  onChange,
  onBlur,
  ...inputProps
}: PasswordFieldProps) {
  const [isHidden, handlePasswordHidden] = useToggle(false);
  return (
    <div
      className={`flex border-2 border-gray-150 rounded-md transition-all duration-200 hover:border-gray-400 focus:border-gray-400 ${
        isValid ? "border-red-500" : ""
      }`}
    >
      <input
        {...inputProps}
        type={isHidden ? "text" : "password"}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        className="w-[92%] px-4 py-2  outline-none rounded-md"
      />
      <button type="button" onClick={handlePasswordHidden}>
        {isHidden ? <EyeSlash /> : <EyeOpen />}
      </button>
    </div>
  );
}
