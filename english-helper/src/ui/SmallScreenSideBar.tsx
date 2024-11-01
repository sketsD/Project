import { ReactNode } from "react";
import SideBarLink from "./SideBarLink";
import Button from "./Button";
import BoxArrowIcon from "../assets/svgs/BoxArrowIcon";

type SmallScreenSideBar = {
  children: ReactNode;
};

export default function SmallScreenSideBar({ children }: SmallScreenSideBar) {
  return (
    <div className=" absolute w-screen h-screen top-0 left-0 flex z-40 ">
      <div className="basis-0 backdrop-blur-sm bg-slate-200/30 md:basis-3/6"></div>
      <ul className=" basis-full flex flex-col bg-slate-100 p-8 justify-between md:basis-3/6 ">
        <div className="relative">
          {children}
          <div
            id="sideBarElement"
            className="space-y-4 mt-9 tracking-wide font-medium"
          >
            <SideBarLink to="/tutor">Find tutors</SideBarLink>
            <SideBarLink to="/buisness">Companies training</SideBarLink>
            <SideBarLink to="/login">Become a tutor</SideBarLink>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <select name="language" id="language" className="bg-transparent">
            <option value="en">English</option>
            <option value="uk">Українська</option>
          </select>
          <Button to="/" type="secondaryBlack" addedClass="hover:gap-6">
            Log in
            <BoxArrowIcon />
          </Button>
        </div>
      </ul>
    </div>
  );
}
