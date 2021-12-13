const Hero = () => {
    return (
        <div className="grid-cols-2 md:grid md:mt-11 hero">
                <div className="md:px-16 py-36 herotxt">
                    <h6 className="px-2 font-medium text-gray-500">ku iibi muraadso</h6>
                    <h1 className="my-5 md:font-bold md:text-gray-800 md:capitalize lg:text-6xl">sidee ugu iibin krtaa <br /> alaabtaada <span className="md:text-red-600">muraadso </span></h1>
                    <p className="text-gray-600" >Whether you’ve already got an established ecommerce business, a great idea for a new product, or you just have a passion for selling, here’s how to take that next step with Muraadso</p>
                </div>
                <div className="heroimg">
                    <img className="w-4/4 "  src="/images/heroimage.png" alt="heroimage" />
                </div>
            
        </div>
    )
}

export default Hero
