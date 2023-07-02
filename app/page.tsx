"use client";
import { BsPlus, BsBell } from "react-icons/bs";

import Search from "@/components/Search";
import Button from "@/components/signup/Button";
import Signup from "@/components/signup/Signup";
import Image from "next/image";
import Stories from "@/components/stories/Stories";

export default function Home() {
  return (
    <div className="bg-[#ecedf0] h-full w-full">
      <div className="lg:flex lg:justify-between lg:items-center lg:w-full lg:p-2 lg:gap-x-3 flex">
        <div className="p-3 hidden md:w-52 lg:flex lg:items-center">
          <p className="text-lg font-semibold">Hello Hawknad!👋</p>
        </div>

        <div className=" lg:w-[70%] lg:flex lg:items-center lg:h-14 lg:justify-end flex w-full justify-between lg:gap-x-4 p-2 lg:p-0">
          <Search />

          <Button className="bg-black w-fit flex p-2 items-center lg:flex lg:justify-center lg:gap-x-1 lg:w-fit lg:px-5 lg:py-3 lg:rounded-xl">
            <BsPlus size={18} className="text-white" />
            <p className="hidden lg:text-white lg:font-normal text-slate-300 lg:flex lg:text-sm ">
              New Post
            </p>
          </Button>
        </div>
      </div>
      <Stories />
    </div>
  );
}
