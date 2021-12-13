const Hero = () => {
    return (
        <div className="grid grid-cols-2 hero">
                <div className="px-16 py-20 herotxt">
                    <h6 className="px-1 font-medium text-gray-500">ku iibi muraadso</h6>
                    <h1 className="font-bold text-gray-800 capitalize lg:text-6xl">sidee ugu iibin krtaa <br /> alaabtaada <span className="text-red-600">muraadso </span></h1>
                </div>
                <div className="heroimg">
                    <img className="w-4/4 "  src="/images/heroimage.png" alt="heroimage" />
                </div>
            
        </div>
    )
}

export default Hero
