import NanBarLink from "./NavBarLink";
import { Link } from "react-router-dom";
import SmallScreenSideBar from "./SmallScreenSideBar";
import { useState } from "react";
import Button from "./Button";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleIsOpen() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <header>
      <nav className="flex justify-between p-4 bg-white  w-full fixed z-50 ">
        <div className="flex items-center">
          <Link
            to="/"
            className="text-3xl pr-10 font-medium underline cursor-pointer"
          >
            d
            <span>
              <span className="inline-block py-2 px-2 bg-emerald-400 rounded-full"></span>
            </span>
            Lang
          </Link>
          <div
            id="navBarElement"
            className="hidden tracking-normal  space-x-8 lg:flex"
          >
            <NanBarLink to="/tutor">Find tutors</NanBarLink>
            <NanBarLink to="/buisness">Companies training</NanBarLink>
            <NanBarLink to="/login">Become a tutor</NanBarLink>
          </div>
        </div>
        <div className=" items-center gap-8 flex">
          <select
            name="language"
            id="language"
            className="bg-transparent hidden lg:block"
          >
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
          {/* darkMode */}
          <Button
            to="/login"
            style="colored"
            addedClass="hidden lg:px-10 lg:flex lg:border-2 lg:border-black lg:text-black lg:py-2 hover:bg-white hover:gap-3 hover:pl-9"
          >
            <BoxArrowIcon />
            Log in
          </Button>

          <button onClick={handleIsOpen}>
            <div className="lg:hidden space-y-2">
              <span className="block h-0.5 w-8  bg-slate-900"></span>
              <span className="block h-0.5 w-8  bg-slate-900"></span>
              <span className="block h-0.5 w-8  bg-slate-900"></span>
            </div>
          </button>
          {isOpen && (
            <SmallScreenSideBar>
              <button
                onClick={handleIsOpen}
                className="cursor-pointer z-50 absolute left-[92%] bottom-[97%]"
              >
                <div>
                  <span className="block h-1 w-8 rotate-45 bg-gray-600"></span>
                  <span className="block relative bottom-1 h-1 w-8 -rotate-45 bg-gray-600"></span>
                </div>
              </button>
            </SmallScreenSideBar>
          )}
        </div>
      </nav>
    </header>
  );
}
