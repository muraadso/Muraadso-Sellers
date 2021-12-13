
const Navbar = () => {
    return (
        <div>
     <div className="flex items-center justify-between w-full px-24 py-6 navbar ">
         <a className="logo" href="#">Muraadso</a>
         <nav className="flex items-center justify-between w-1/4 bg-red-300 nav">
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Doc</a>
             <a href="">Contact Us</a>
         </nav>
         <a href="#" className="px-3 py-2 bg-red-600 signup ">Signup</a>
     </div>
            
        </div>
    )
}

export default Navbar
