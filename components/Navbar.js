import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="container  flex justify-between items-center h-24  mx-auto px-4 text-white">
      <h1
        className={`${"sm:opacity-100 w-full text-3xl font-bold text-lightBluishGreen "}${
          nav ? "opacity-0 ease-in duration-200" : ""
        }`}
      >
        REACT.
      </h1>
      <ul className="hidden cursor-pointer sm:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Company</li>
        <li className="p-4">Resources</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div className="sm:hidden cursor-pointer" onClick={handleNav}>
        {!nav ? <AiOutlineMenu size={24} /> : <AiOutlineClose size={24} />}
      </div>
      <div
        className={`${" h-full border-r border-r-gray-900 bg-black w-3/5 z-40 fixed ease-in-out duration-500 sm:hidden "}
          ${nav ? "left-0 top-0 " : "top-0 left-[-100%] "}`}
      >
        <h1 className="w-full px-4 mt-7 text-3xl font-bold text-lightBluishGreen">
          REACT.
        </h1>
        <ul className="uppercase cursor-pointer mt-5">
          <li className="p-4 border-b border-b-gray-900">Home</li>
          <li className="p-4 border-b border-b-gray-900">Company</li>
          <li className="p-4 border-b border-b-gray-900">Resources</li>
          <li className="p-4 border-b border-b-gray-900">About</li>
          <li className="p-4 border-b border-b-gray-900">Contact</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
