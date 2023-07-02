"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { BiChevronRight } from "react-icons/bi";

const Avatar = () => {
  const route = useRouter();

  const toProfile = () => {
    route.push("/profile");
  };
  return (
    <>
      <div className="group">
        <div
          onClick={toProfile}
          className="lg:flex lg:items-center lg:gap-x-3 group-hover:bg-gray-100 transition bg-white rounded-full p-1 lg:rounded-xl hover:transition hover:drop-shadow-sm sm:rounded-full sm:p-1  lg:p-2 cursor-pointer"
        >
          <Image
            src="/images/avatar.jpg"
            alt="Avatar"
            width={50}
            height={50}
            className="rounded-full object-cover h-10 w-10 lg:h-12 lg:w-12"
          />
          <div className="hidden lg:block lg:items-center">
            <p className="font-semibold text-base">Thomas Dankwah</p>
            <p className="text-sm text-slate-500 cursor-pointer">@hawknad</p>
          </div>
          <BiChevronRight
            size={20}
            className="hidden lg:flex lg:items-center"
          />
        </div>
      </div>
    </>
  );
};

export default Avatar;
