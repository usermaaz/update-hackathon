import Image from "next/image";
import logo from "@public/images/logo/logo.svg";
import footerhome from '../../../public/images/Frame (17).png'
import React from 'react';

const JoinUs = () => {
  return (
    <div className="max-w-2xl mx-auto p-8">
      {/* Logo */}
      <Image
        src={logo}
        alt="Logo"
        className="h-8 mx-auto mb-4"
      />
      
      {/* Main Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">BECOME A NIKE MEMBER</h1>
        <p className="text-lg  text-[#8D8D8D] bg-[#ffffff] font-semibold">
          Create your Nike Member profile and get 
           <br />
          first access to the very best of Nike 
          <br />
           products, inspiration, and community.
        </p>
      </div>

      {/* Sign Up Form */}
      <form className="bg-white p-6 rounded-lg shadow-lg space-y-4">
        {/* Input Fields */}
        <input 
          type="email" 
          placeholder="Email address" 
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input 
          type="password" 
          placeholder="Password" 
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input 
          type="text" 
          placeholder="First Name" 
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <input 
        
          placeholder ="date of birth"
          className="w-full p-3 border border-gray-300 rounded-md"
        />
        <p className="text-[#8D8D8D] bg-[#ffffff] text-center">
        Get a Nike Member Reward every year on your Birthday.
        </p>
        <input 
        placeholder ="india"
        name="india"
        className="w-full p-3 border border-gray-300 rounded-md"
        />

        {/* Gender Radio Buttons */}
        <div className="flex justify-center ">
            <button className="w-full text-[#8D8D8D] bg-[#ffffff] text-center py-3 rounded-md " >male</button>
            <button className="w-full text-[#8D8D8D] bg-[#ffffff] text-center py-3 rounded-md">female</button>
        </div>

        {/* Newsletter Checkbox */}
        <div className="flex items-center text-[#8D8D8D] bg-[#ffffff]">
          <input type="checkbox" id="emailUpdates" className="mr-2" />
          <label htmlFor="emailUpdates">
            Sign up for emails to get updates from Nike on products, offers, and your Member benefits.
          </label>
        </div>

        {/* Terms and Conditions */}
        <p className="text-sm text-gray-600 mb-4">
          By creating an account, you agree to Nike's 
          <a href="#" className="text-[#8D8D8D] bg-[#ffffff]"> Privacy Policy</a> and 
          <a href="#" className="text-[#8D8D8D] bg-[#ffffff]"> Terms of Use</a>.
        </p>

        {/* Sign Up Button */}
        <button 
          type="submit" 
          className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
        >
          JOIN US
        </button>

        {/* Already a Member Link */}
        <p className="mt-4 text-sm text-[#8D8D8D] bg-[#ffffff] justify-center">
          Already a Member? 
          <a href="#" className="text-black justify-center"> Sign In</a>.
        </p>
      </form>
      <Image
        src={footerhome}  // Corrected path (without the curly braces)
        alt="footerhome"
        width={1340}  // Adjust width as needed
        height={970} // Adjust height as needed
        />  
    </div>
  );
};

export default JoinUs;
