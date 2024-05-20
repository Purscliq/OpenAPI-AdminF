import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { CiSearch } from "react-icons/ci";

const DashNav = () => {
  return (
    <>
      <nav className="flex gap-8 items-center px-5 py-3">
        <label
          htmlFor="my-drawer-2"
          className="flex lg:hidden text-blue-800 px-3"
        >
          <CgMenuRightAlt size="25" />
        </label>

        <div className="relative w-full">
          <span className="absolute inset-y-0 start-0 grid w-10 place-content-center">
            <CiSearch />
          </span>
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md border-gray-200 py-2 pe-0 sm:text-sm pl-8 ring-0 bg-white shadow-sm"
          />
        </div>
      </nav>
      <div className=" border border-gray-200" />
    </>
  );
};

export default DashNav;
