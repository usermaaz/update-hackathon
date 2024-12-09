import React from "react";
import Image from "next/image";
import logo from "@public/images/logo/logo.svg";
import Footer from "../components/Footer";

const SignInPage = () => {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Main Content */}
      <main className="flex-grow flex justify-center items-center bg-gray-50">
        <div className="max-w-md w-full text-center">
          <Image
            src={logo} alt="Logo"
            className="h-8 mx-auto mb-4"
          />
          <h1 className="text-xl font-bold mb-6 text-black">
            YOUR ACCOUNT <br />
             FOR EVERYTHING <br />
              NIKE
          </h1>
          <form className="space-y-4 font-extralight">
            <input
              type="email"
              placeholder="Email address"
              className="w-full p-3 border rounded-lg text-[#8D8D8D] bg-[#ffffff]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border rounded-lg text-black"
            />
            <div className="flex justify-between items-center text-sm  text-[#8D8D8D] bg-[#ffffff]">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 " />
                Keep me signed in
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgotten your password?
              </a>
            </div>
            <p className="text-xs text-gray-500">
              By logging in, you agree to Nike's{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>{" "}
              and{" "}
              <a href="#" className=" text-[#8D8D8D] bg-[#ffffff] hover:underline">
                Terms of Use
              </a>
              .
            </p>
            <button
              type="submit"
              className="w-full  text-white bg-black py-3 rounded-lg font-bold"
            >
              SIGN IN
            </button>
          </form>
          <p className="mt-4 text-sm  text-[#8D8D8D] bg-[#ffffff] ">
            Not a Member?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Join Us.
            </a>
          </p>
        </div>
      </main>
  <Footer/>
    </div>
  );
};

export default SignInPage;