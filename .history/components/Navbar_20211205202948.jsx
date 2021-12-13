import React, { useState } from "react";
import { HiOutlineMenuAlt2, HiOutlineMenuAlt3 } from "react-icons/hi";



export default function Navbar() {
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="sticky top-0 z-20 items-center justify-between bg-white px-14 md:px-24 md:py-5 navbar md:flex">
      <div className="flex items-center justify-between">
        <a href="#">
          <h2>Muraadso</h2>
        </a>


        {showNav ? (
          <HiOutlineMenuAlt3
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden" />
           
        ) : (
          <HiOutlineMenuAlt2
            onClick={() => setShowNav(!showNav)}
            className="block w-10 h-10 p-2 cursor-pointer md:hidden"
          />
        )}
      </div>

      <ul
        className={
          (showNav ? "left-0" : "-left-full") +
          " md:static fixed bottom-0 md:ml-24 top-14 md:flex md:space-x-6 items-center md:bg-transparent bg-white bg-opacity-90 md:w-auto w-10/12 md:text-gray-700 text-gray-800  md:space-y-0 space-y-5 p-2 transition-left nav"
        }
      >
        <a href="#"> Home</a>
        <a href="#"> About</a>
        <a href="#"> Doc</a>
        <a href="#"> Contact Us</a>
      <a className="px-4 py-2 text-white bg-red-600 rounded" href="">Signup</a>
      </ul>
    </nav>
  );
}

























// const Navbar = () => {
//     return (
//         <div>
//      <div className="sticky top-0 z-20 items-center justify-between bg-white md:flex navbar">
//          <a className="logo" href="#">Muraadso</a>
//          <nav className="fixed bottom-0 items-center w-10/12 p-2 space-y-5 text-white bg-gray-500 md:static top-12 md:flex md:space-x-7 md:bg-transparent bg-opacity-90 md:w-auto md:text-gray-500 md:space-y-0 transition-left nav">
//              <a className="hover:text-red-600" href="">Home</a>
//              <a className="hover:text-red-600" href="">About</a>
//              <a className="hover:text-red-600" href="">Doc</a>
//              <a className="hover:text-red-600" href="">Contact Us</a>
//          </nav>
//          <a href="#" className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 signup ">Signup</a>
//      </div>
            
//         </div>
//     )
// }

// export default Navbar
