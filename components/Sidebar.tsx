"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { BiMessageDetail, BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { TbMovie } from "react-icons/tb";
import { GiCash } from "react-icons/gi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineExplore } from "react-icons/md";
import { CiLogout } from "react-icons/ci";
import { BsBell } from "react-icons/bs";

import Box from "./Box";
import SidebarItem from "./SidebarItem";
import Avatar from "./Avatar";
import Button from "./signup/Button";

interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: HiHome,
        label: "Home",
        active: pathname !== "/search",
        href: "/",
      },
      {
        icon: MdOutlineExplore,
        label: "Trending",
        active: pathname === "/trending",
        href: "/trending",
      },
      {
        icon: BsBell,
        label: "Notification",
        active: pathname === "notification",
        href: "/notification",
      },
      {
        icon: BiMessageDetail,
        label: "Message",
        active: pathname === "message",
        href: "/message",
      },

      {
        icon: TbMovie,
        label: "Reels",
        active: pathname === "reels",
        href: "/reels",
      },
      {
        icon: GiCash,
        label: "Earnings",
        active: pathname === "earnings",
        href: "/earnings",
      },
      {
        icon: FiSettings,
        label: "Settings",
        active: pathname === "settings",
        href: "/settings",
      },
    ],
    [pathname]
  );
  return (
    <>
      <div className="flex h-full">
        <div className="md:flex flex-col gap-y-2 bg-white h-full w-[80px] lg:w-[300px] px-1">
          <Box className="flex flex-col justify-between overflow-y-auto h-full">
            <div className="flex flex-col gap-y-6 items-center p-2">
              <Avatar />
            </div>
            <div className="flex flex-col items-center gap-y-1 px-5 py-4">
              {routes.map((item) => (
                <SidebarItem key={item.label} {...item} />
              ))}
            </div>
            <div className="flex flex-col gap-y-6 items-center p-2">
              <Button className="bg-white outline-none drop-shadow-sm lg:flex lg:justify-center lg:font-medium lg:w-[70%] py-2 lg:px-4 rounded-lg w-fit ">
                <CiLogout size={18} className="lg:hidden" />
                <p className="hidden lg:flex">Logout</p>
              </Button>
            </div>
          </Box>
        </div>
        <main className="h-full flex-1 overflow-y-auto">{children}</main>
      </div>
    </>
  );
};

export default Sidebar;
