export const How = () => {
    return (
        <div className="mt-72 how mb-80">
            <div className="howheader">
            <h2>this should be how it works</h2>
            </div>
            <div className="md:grid-cols-4 md:grid md:gap-x-4 gap-y-24 howsteps">

                <div className="relative max-w-xl bg-white border-2 border-red-500 rounded max-h-9 p-9 how-card ">
                    <div className="flex items-center justify-center card-icon ">
                        <img  src="./icons/register.png" alt="register" />
                        
                    </div>
                    <div className="cardbody">
                        Iska diiwaan geli adeega 24h kadib waxad helaysa fariin ah in lagu aqbalay
                    </div>
                    <div className="absolute flex items-center justify-center w-10 h-10 text-red-500 bg-white border-2 border-red-500 rounded-full md:left-36 -bottom-4 left-40 place-content-center card-number"> <h2>1</h2></div>
                </div>


                
                
            </div>
            
        </div>
    )
}
