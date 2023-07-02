"use client";

import { DATA } from "@/data";
import Story from "./Story";

const Stories = () => {
  return (
    <div className="hidden lg:flex lg:px-5">
      <div className="bg-white rounded-2xl h-[140px] w-[70%] flex flex-col justify-center items-center ">
        <p className="self-center">Stories</p>
        <div className="flex justify-center items-center gap-x-4 ">
          {DATA.map((item) => (
            <Story key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stories;
