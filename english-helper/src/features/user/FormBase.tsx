import CheckBoxInput from "../../ui/CheckBoxInput";
import PasswordField from "./PasswordField";
import Label from "./Label";

type FormBaseProps = {
  expanded?: boolean;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
} & ComponentPropsWithoutRef<"input">;

export default function FormBase({ value onChange, onBlur, onSubmit, }: FormBaseProps) {
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex flex-col justify-center gap-2 pt-8 "
    >
      <Label htmlFor="email" isValid={emailValidation}>
        Email {emailValidation ? formik.errors.email : ""}
      </Label>
      <input
        type="text"
        id="email"
        name="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        placeholder="Your email"
        className={`border-2 border-gray-150 px-4 py-2 rounded-md outline-none  transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400  ${
          emailValidation ? "border-red-500" : ""
        }`}
      />

      <Label htmlFor="password" isValid={passwordValidation}>
        Password {passwordValidation ? formik.errors.password : ""}
      </Label>
      <PasswordField
        id="password"
        name="password"
        isValid={passwordValidation}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        placeholder="Your password"
      />

      {/* <Link to="" className="underline">
        Forgot your password?
      </Link> */}
      <CheckBoxInput
        id="remember"
        labelValue="Remember me"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />

      <Button type="submit" style="colored" addedClass="h-12 w-full">
        Log in
      </Button>
    </form>
  );
}
