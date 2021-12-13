
const Navbar = () => {
    return (
        <div>
     <div className="sticky top-0 z-20 py-6 bg-white md:flex md:items-center md:justify-between md:px-24 navbar mb-11">
         <a className="logo" href="#">Muraadso</a>
         <nav className="flex items-center justify-between w-1/4 nav">
             <a className="hover:text-red-600" href="">Home</a>
             <a className="hover:text-red-600" href="">About</a>
             <a className="hover:text-red-600" href="">Doc</a>
             <a className="hover:text-red-600" href="">Contact Us</a>
         </nav>
         <a href="#" className="px-4 py-2 text-white bg-red-600 rounded hover:bg-red-700 signup ">Signup</a>
     </div>
            
        </div>
    )
}

export default Navbar
