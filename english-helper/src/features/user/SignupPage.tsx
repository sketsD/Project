import { useFormik } from "formik";
import Button from "../../ui/Button";
import PasswordField from "./PasswordField";
import Label from "./Label";
import { Link } from "react-router-dom";
import * as Yup from "yup";

export default function SignupPage() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      secondName: "",
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, " must be at least 2 characters")
        .required(" is required"),
      secondName: Yup.string()
        .min(2, " must be at least 2 characters")
        .required(" is required"),
      email: Yup.string().email(" address is invalid").required(" is required"),
      password: Yup.string()
        .min(8, " must be at least 8 characters")
        .matches(/[A-Z]/, "must contain an uppercase letter")
        .matches(/[a-z]/, "must contain a lowercase letter")
        .matches(/\d/, "must contain a number")
        .matches(/[@$!%*?&]/, "must contain a special character")
        .required(" is required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Confirmation is required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const emailValidation: boolean =
    formik.touched.email && formik.errors.email ? true : false;
  const passwordValidation: boolean =
    formik.touched.password && formik.errors.password ? true : false;
  const confirmPasswordValidation: boolean =
    formik.touched.confirmPassword && formik.errors.confirmPassword
      ? true
      : false;
  const firstNameValidation: boolean =
    formik.touched.firstName && formik.errors.firstName ? true : false;
  const secondNameValidation: boolean =
    formik.touched.secondName && formik.errors.secondName ? true : false;

  return (
    <div className="pt-24 h-screen w-full mx-auto flex flex-col justify-center p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 ">
      <div className="w-full border-b border-black">
        <h2 className="font-bold text-2xl">Sign up</h2>
      </div>

      <div className="py-4">
        <p className="inline"> Already have an account?</p>
        <span> </span>
        <Link to="/login" className="underline">
          Log in!
        </Link>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col justify-center gap-2 pt-8 "
      >
        <Label htmlFor="firstName" isValid={firstNameValidation}>
          First name {firstNameValidation ? formik.errors.firstName : ""}
        </Label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
          placeholder="Your first name"
          className={`border-2 border-gray-150 px-4 py-2 rounded-md outline-none  transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400  ${
            firstNameValidation ? "border-red-500" : ""
          }`}
        />
        <Label htmlFor="firstName" isValid={secondNameValidation}>
          Second name {secondNameValidation ? formik.errors.firstName : ""}
        </Label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.secondName}
          placeholder="Your second name"
          className={`border-2 border-gray-150 px-4 py-2 rounded-md outline-none  transition-all duration-200 shadow-none hover:border-gray-400 focus:border-gray-400  ${
            secondNameValidation ? "border-red-500" : ""
          }`}
        />
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

        <Label htmlFor="confirmPassword" isValid={confirmPasswordValidation}>
          {confirmPasswordValidation
            ? formik.errors.confirmPassword
            : "Confirm your password"}
        </Label>
        <PasswordField
          id="confirmPassword"
          name="confirmPassword"
          isValid={confirmPasswordValidation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.confirmPassword}
          placeholder="Confirm your password"
        />

        <Button type="submit" style="colored" addedClass="h-12 w-full">
          Sign up
        </Button>
      </form>
      <div className="py-4 ">
        <span>
          By clicking Sign up, you agree to doLang
          <span> </span>
          <Link to="/termsofuse" className="underline">
            Terms of use
          </Link>
          <span> and </span>
          <Link to="/privacypolicy" className="underline">
            Privacy Policy
          </Link>
        </span>
      </div>
    </div>
  );
}
