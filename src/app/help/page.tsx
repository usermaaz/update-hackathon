import { IoIosSearch } from "react-icons/io";
import Image from "next/image";
import Help from "../../../public/images/Frame (3).jpg"
import Footer from "../components/Footer";

const ContactUsPage = () => {
  return (
    <div>
    <main className="bg-white flex flex-col items-center w-full p-8">
      {/* Title Section */}
      <section className="w-full max-w-[1440px] px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-gray-900">
          GET HELP
        </h1>

        {/* Search Bar Section */}
        <div className="mt-6 flex justify-center items-center">
          <input
            type="text"
            placeholder="What can we help you with?"
            className="w-[457px] rounded-lg border border-slate-800 py-3 px-4 text-gray-500/80"
          />
          <div className="ml-2">
            <IoIosSearch className="w-6 h-6 text-gray-700" />
          </div>
        </div>
      </section>
    </main>
    <div>
    </div>
    <Image
        src={Help}  // Corrected path (without the curly braces)
        alt="helppage"
        width={1600}  // Adjust width as needed
        height={3000} // Adjust height as needed
        style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}
      />
      <br />
      <Footer/>
    </div>
  );
};

export default ContactUsPage;
