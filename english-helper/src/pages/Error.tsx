import ArrowLeft from "../assets/svgs/ArrowLeft";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";
import AppFrame from "../ui/AppFrame";
import Button from "../ui/Button";
import Footer from "../ui/footer/Footer";

export default function Error() {
  return (
    <>
      <AppFrame>
        <div className=" h-dvh flex flex-col items-center justify-evenly p-4 md:h-[85dvh] gap-10 lg:justify-center">
          <div className="flex flex-col gap-5 lg:w-1/2">
            <p>
              <span className="font-bold">404</span> - Page is not found
            </p>
            <h2 className="font-semibold text-xl md:text-4xl xl:text-5xl">
              Sorry, but we can't find this page...
            </h2>
            <p>You can come back to the main page</p>
          </div>

          <div className="w-full flex flex-col-reverse gap-2 sm:flex-row lg:w-1/2">
            <div className="basis-1/2">
              <Button
                to="/"
                style="secondaryWhite"
                addedClass=" gap-5 hover:gap-10 "
              >
                <ArrowLeft />
                Back to doLang
              </Button>
            </div>
            <div className="basis-1/2">
              <Button
                to="/login"
                style="colored"
                addedClass="gap-5 hover:gap-10 "
              >
                Log in
                <BoxArrowIcon />
              </Button>
            </div>
          </div>
        </div>
      </AppFrame>
      <Footer />
    </>
  );
}
