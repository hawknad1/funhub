"use client";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  return (
    <div className="flex items-center bg-white p-2 rounded-full lg:w-[55%] ">
      <div className="cursor-pointer " onClick={() => {}}>
        <FiSearch size={20} className="text-slate-500 " />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="px-3 outline-none w-full bg-transparent text-slate-500 hidden lg:flex lg:items-center"
      />
    </div>
  );
};

export default Search;
