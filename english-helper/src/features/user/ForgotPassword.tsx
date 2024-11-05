import { useFormik } from "formik";
import Button from "../../ui/Button";
import Label from "./Label";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import ArrowLeft from "../../assets/svgs/ArrowLeft";

export default function ForgotPassword() {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("address is invalid").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const emailValidation: boolean =
    formik.touched.email && formik.errors.email ? true : false;

  return (
    <div className="h-screen w-full mx-auto flex flex-col justify-center p-4 sm:w-1/2 lg:w-1/2 xl:w-1/3 2xl:w-1/4 ">
      <div className="w-full border-b border-black">
        <h2 className="font-bold text-2xl">Forgot your password ?</h2>
      </div>

      <div className="py-4">
        <p className="inline"> Do not have an account?</p>
        <span> </span>
        <Link to="/signup" className="underline">
          Sign up
        </Link>
        <span> first!</span>
        <span> or </span>
        <Link to="/login" className="underline">
          Log in
        </Link>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className=" flex flex-col justify-center gap-2 pt-8 "
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

        <Button type="submit" style="colored" addedClass="h-12 w-full">
          Submit
        </Button>
        <Button
          to="/"
          style="secondaryWhite"
          addedClass="h-12 gap-5 hover:gap-10 "
        >
          <ArrowLeft />
          Back to doLang
        </Button>
      </form>
    </div>
  );
}
