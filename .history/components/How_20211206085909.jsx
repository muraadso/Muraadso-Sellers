export const How = () => {
    return (
        <div className="mt-72 how mb-80">
            <div className="howheader">
            <h2>this should be how it works</h2>
            </div>
            <div className="grid grid-cols-4 howsteps">

                <div className="max-w-2xl p-5 bg-white border-2 border-red-500 rounded how-card">
                    <div className="card-icon">
                        <img src="./icons/register.png" alt="register" />
                        
                    </div>
                    <div className="cardbody">
                        Iska diiwaan geli adeega 24h kadib waxad helaysa fariin ah in lagu aqbalay
                    </div>
                    <div className="flex items-center justify-center w-10 h-10 text-red-500 border-2 border-red-500 rounded-full card-number"> <h2>1</h2></div>
                </div>
        
            </div>
            
        </div>
    )
}
