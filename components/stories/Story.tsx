"use client";

import Image from "next/image";

interface StoryProps {
  name: string;
  imageUrl: string;
}

const Story: React.FC<StoryProps> = ({ name, imageUrl }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={imageUrl}
        alt="Profile"
        width={50}
        height={50}
        className="rounded-full object-cover h-16 w-16 cursor-pointer"
      />

      <p className="py-1">{name.substring(0, 6)}</p>
    </div>
  );
};

export default Story;
