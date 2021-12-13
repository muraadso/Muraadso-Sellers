
const Navbar = () => {
    return (
        <div>
     <div className="flex items-center justify-between w-full px-24 py-7 navbar ">
         <a href="#">Muraadso</a>
         <ul className="flex justify-between w-1/4 ml-24 bg-red-300 nav">
             <NavItem href="">Home</NavItem>
             <NavItem href="">About</NavItem>
             <NavItem href="">Doc</NavItem>
             <NavItem href="">Contact Us</NavItem>
         </ul>
         <a href="#" className="signup">Signup</a>
     </div>
            
        </div>
    )
}

export default Navbar
