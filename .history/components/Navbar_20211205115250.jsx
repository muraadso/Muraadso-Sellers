
const Navbar = () => {
    return (
        <div>
     <header className="text-gray-800 bg-white body-font navbar">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
      <span className="ml-3 text-xl text-red-600 font-lato">Muraadso</span>
    </a>
    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
      <a className="mr-5 cursor-pointer hover:text-red-600">First Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Second Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Third Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-red-700 md:mt-0">Signup</button>
  </div>
</header>
            
        </div>
    )
}

export default Navbar
