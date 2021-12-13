const Navbar = () => {
    return (
        <div>
     <header className="text-gray-800 bg-white body-font">
  <div className="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
    <a className="flex items-center mb-4 font-medium text-white title-font md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Muraadso</span>
    </a>
    <nav className="flex flex-wrap items-center justify-center text-base md:ml-auto">
      <a className="mr-5 cursor-pointer hover:text-red-600">First Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Second Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Third Link</a>
      <a className="mr-5 cursor-pointer hover:text-red-600">Fourth Link</a>
    </nav>
    <button className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-red-600 border-0 rounded focus:outline-none hover:bg-red-700 md:mt-0">Signup </button>
  </div>
</header>
            
        </div>
    )
}

export default Navbar
