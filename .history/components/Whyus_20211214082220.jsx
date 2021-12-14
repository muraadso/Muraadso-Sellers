import { gsap } from "gsap";



const onEnter = ({ currentTarget }) => {
  gsap.to(currentTarget, { transform:" scale(1.1)" });
};

const onLeave = ({ currentTarget }) => {
  gsap.to(currentTarget, { transform: "scale(1)" });
};


const Whyus = () => {


    return (
        <div
       
        className="flex flex-col items-center justify-center mt-32 mb-24 how md:gap-y-4 gap-y-11">
            <div className="flex flex-col items-center justify-center howheader">
            <h2 className="text-4xl font-bold text-center">Nagu Dooro Macmiil</h2>
            <p className="mt-2 text-lg text-center text-gray-600 md:w-1/2">
                Adeegan ay kuu keentay shirkadda MURAADSO waxa uu kaa caawinaya 
                in aad ganacsigaaga kor u qaadid gaartidna macaamiil aad u badan 
                </p>
            </div>
            <div className="h-full md:p-16 md:gap-4 gap-72 md:grid-cols-4 md:grid howsteps">

                <div className="relative max-h-full p-6 bg-white border-4 border-red-400 rounded how-card ">
                    <div className="flex items-center justify-center my-4 card-icon ">
                        <img className="h-24"  src="./images/audiance.png" alt="register" />
                        
                    </div>
                    <div className="mb-4 text-xl text-center text-gray-800 cardbody">
                        Gaar Macaamiil ka badan adigoo isticmaalaya adeegan iyo dhamaan adeegyada muraadso
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-red-500 bg-white border-2 border-red-500 rounded-full md:left-36 -bottom-5 md:left-40 left-36 place-content-center card-number"> <h2>1</h2></div>
                </div>

                
                <div className="relative max-h-full p-6 bg-white border-4 border-red-400 rounded how-card ">
                    <div className="flex items-center justify-center my-4 card-icon ">
                        <img className="h-24"  src="./images/ad.png" alt="register" />    
                    </div>
                    <div className="mb-4 text-xl text-center text-gray-800 cardbody">
                        ku xayaysiiso alaabtada
                    dhamaan bogaga ay shirkadu ku leedahay baraha bulshada
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-red-500 bg-white border-2 border-red-500 rounded-full md:left-36 -bottom-5 md:left-40 left-36 place-content-center card-number"> <h2>2</h2></div>
                </div>
                
                

                
                <div className="relative max-h-full p-6 bg-white border-4 border-red-400 rounded how-card ">
                    <div className="flex items-center justify-center my-4 card-icon ">
                        <img className="h-24"  src="./images/verified.png" alt="register" />
                        
                    </div>
                    <div className="mb-4 text-xl text-center text-gray-800 cardbody">
                        Hubinta qualityga alaabta
                        iyo shaqaale khibrad u leh
                        qiimaynta iyo gaarsiinta alabtada macaamiishena 
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-red-500 bg-white border-2 border-red-500 rounded-full md:left-36 -bottom-5 md:left-40 left-36 place-content-center card-number"> <h2>3</h2></div>
                </div>

                
                <div className="relative max-h-full p-6 bg-white border-4 border-red-400 rounded how-card ">
                    <div className="flex items-center justify-center my-4 card-icon ">
                        <img className="h-24"  src="./images/money.png" alt="register" />
                        
                    </div>
                    <div className="mb-4 text-xl text-center text-gray-800 cardbody">
                       amaanada iyo helista faa’idaada sida ugu dhakhsiiyaha badan 
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 font-bold text-red-500 bg-white border-2 border-red-500 rounded-full md:left-36 -bottom-5 md:left-40 left-36 place-content-center card-number"> <h2>4</h2></div>
                </div>

            </div>
            <p className="text-center text-gray-800">Wixii faahfaahin ah waxaad kala xiriiri kartaa lambaradan hoos kuugu xusan</p>
            <a className="font-medium text-red-600" href="#">+252 63 3333471</a>
            
        </div>
    )
}


export default Whyus;