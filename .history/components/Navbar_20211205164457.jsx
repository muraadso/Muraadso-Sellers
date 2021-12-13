
const Navbar = () => {
    return (
        <div>
     <div className="flex items-center justify-between w-full px-24 py-7 navbar ">
         <a href="#">Muraadso</a>
         <nav className="flex justify-around w-2/4 bg-red-300 nav">
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