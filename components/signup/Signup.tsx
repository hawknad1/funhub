"use client";

import Image from "next/image";
import Button from "./Button";
import Inputs from "./Inputs";
import Buttons from "./Buttons";
import SignIn from "./SignIn";
import { useRouter } from "next/navigation";

const Signup = () => {
  const router = useRouter();

  return (
    <div className=" bg-white h-screen w-full">
      <div className="flex md:w-full items-center justify-center p-8 md:gap-6">
        <div className=" md:justify-center w-[45%] h-[650px] hidden md:flex">
          <Image
            src="/images/beach.jpg"
            alt="Image"
            width={800}
            height={800}
            className="object-cover rounded-xl"
          />
        </div>

        <div className=" h-[650px] w-full md:w-auto md:h-auto lg:w-[35%]">
          <div className="m-8 mt-24">
            <div className="mb-8">
              <h1 className="lg:text-4xl md:text-3xl font-semibold">
                Create an account
              </h1>
              <p>Let's get started with your 30 day trial.</p>
            </div>

            {/* Inputs */}
            <Inputs />

            {/* Signup buttons */}
            <div className="mt-4">
              <Buttons />
              <p className="text-center text-sm md:text-base py-2">
                Already have an account?{" "}
                <span
                  onClick={() => {
                    router.replace("/signin");
                  }}
                  className="text-black font-semibold cursor-pointer hover:underline un"
                >
                  Log in
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
