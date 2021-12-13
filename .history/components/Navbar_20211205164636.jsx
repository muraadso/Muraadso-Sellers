
const Navbar = () => {
    return (
        <div>
     <div className="flex items-center justify-between w-full px-24 py-8 navbar ">
         <a href="#">Muraadso</a>
         <nav className="flex justify-between w-1/4 ml-24 bg-red-300 nav">
             <a href="">Home</a>
             <a href="">About</a>
             <a href="">Doc</a>
             <a href="">Contact Us</a>
         </nav>
         <a href="#" className="signup">Signup</a>
     </div>
            
        </div>
    )
}

export default Navbar
