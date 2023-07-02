import Image from "next/image";
import Button from "./Button";

const Buttons = () => {
  return (
    <>
      <div className="flex py-1.5">
        <Button className="bg-black text-white">Create account</Button>
      </div>
      <div className="flex py-1.5">
        <Button className="bg-white flex items-center justify-center gap-x-2 text-black border font-semibold border-gray-400">
          <Image src="/images/google.png" width={20} height={20} alt="Google" />
          Sign up with google
        </Button>
      </div>{" "}
      <div className="flex py-1.5">
        <Button className="bg-white flex items-center justify-center gap-x-2 text-black border font-semibold border-gray-400">
          <Image
            src="/images/twitter.png"
            width={20}
            height={20}
            alt="Twitter"
          />
          Sign up with facebook
        </Button>
      </div>
    </>
  );
};

export default Buttons;
