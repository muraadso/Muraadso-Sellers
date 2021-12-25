const Hero = () => {
    return (
        <div className="md:grid-cols-2 md:grid md:mt-11 hero">
                <div className="md:px-16 md:py-36 py-11 herotxt">
                    <h6 className="px-2 font-medium text-gray-500">ku iibi muraadso</h6>
                    <h1 className="my-5 text-3xl font-bold text-gray-800 capitalize md:font-bold md:text-gray-800 md:capitalize lg:text-6xl">sidee ugu iibin krtaa <br /> alaabtaada <span  className="text-red-600 md:text-red-600">muraadso</span></h1>
                    
                    <p className="text-gray-700 md:text-left"> 
                </div> 

                <div className="heroimg">
                    <img className="w-4/4 "  src="/images/heroimage.png" alt="heroimage" />
                </div>
        </div>
    )
}

export default Hero
