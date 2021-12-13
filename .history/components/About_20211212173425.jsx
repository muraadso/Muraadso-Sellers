
const About = () => {
    return (
        <div className="mt-32 about">
            <h1 className="text-3xl font-bold text-center">Ku Iibso Muraadso</h1>
            <div className="gap-x-0 md:-space-x-36 md:px-16 md:grid-cols-2 md:grid about-content">
                <div className="mt-12 aboutimg">
                  <img src="/images/aboutimage.png" className="md:h-96" alt="about image" />
                </div>
                <div className="md:mt-20 mt-11 about-text">
                    {
                        const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + "..." : str;
	};
                    }
                    <p 
                        
                    className=" text-xl text-left">
                        Muraadso waa hogaanka suuqa casriga ee online waana suuq aad ku iibin kartid alaabtaada, ahaw ganacsade alaabta sameeya, mid soo dajiya, si fudud ayaad ugu iibin kartaa suuqa casriga muraadso, sidoo kale ka mid noqo ganacsiyada shabakada internet ku iibiya alaabaha adiga oon ku kharash badan galin, kana faa’idaysanaya khubarada team ka muraadso helayana tobabaro iyo caawimo sidaad ugu iibin lahayd muraadso dhexdeeda Ku dhex iibta muraadso waa wax fudud sidoo kalena kharash yari kaaga bixi karo ama wax kharash ahi kaa baxayn, kaliya waxa lagaaga bahanyay in aad is diwaan galisid, kuna gurtid alaabta aad haysid online shirkada sidaana aad ku bilawdid iibka alaabtaada....<span className="text-red-600">Read More</span>
                    </p>
                </div>
            

            </div>
        </div>
    )
}

export default About
