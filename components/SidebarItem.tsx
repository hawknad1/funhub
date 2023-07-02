import Link from "next/link";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface SidebarProps {
  icon: IconType;
  label: string;
  href: string;
  active?: boolean;
}
const SidebarItem: React.FC<SidebarProps> = ({
  icon: Icon,
  label,
  href,
  active,
}) => {
  return (
    <Link
      href={href}
      className={twMerge(
        `flex flex-row h-auto items-center lg:gap-x-4 outline-none text-sm font-medium cursor-pointer lg:hover:text-blue-500 lg:rounded-lg hover:bg-opacity-20 hover:bg-slate-500 p-2 rounded-full w-fit lg:w-full transition text-neutral-400`,
        active && "text-black"
      )}
    >
      <Icon size={26} />
      <p className="truncate w-full text-black hidden lg:flex">{label}</p>
    </Link>
  );
};

export default SidebarItem;
