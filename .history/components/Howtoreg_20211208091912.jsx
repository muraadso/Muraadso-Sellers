import React from 'react'

const Howtoreg = () => {
  return (
    <div className="flex flex-col md:p-16 howtoreg mb-36">
      <div className="grid items-center justify-between md:grid-cols-2 registerdoc">
        <div className="space-y-4 regcontent">
          <h1 className="text-xl font-bold text-gray-900 md:text-4xl">Sidee isku diiwaan gelin kartaa ?</h1>
          <p className="text-lg text-gray-800 ">intaadan iska diiwaan gelin ka hor waxa aad u baahantahay in aad
            soo buuxisid shuruudahan hoos ku xusan .</p>
            <ol className="ml-4 space-y-2 font-medium text-gray-900 list-decimal">
              <li>Business Email</li>
              <li>Passport / National ID Card</li>
              <li>Phone Number / Marchent Account </li>
              <li>Business Government Registration</li>
            </ol>
        </div>
        <div className="flex items-center justify-end regimage">
          <img className="regimage" src="/images/registrationn.png" alt="" />
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center space-y-3 md:space-x-24 md:flex-row acceptterms">
        <div className="flex flex-row items-center justify-center space-x-2 check">
        <input className="w-5 h-5 focus-within:text-red-600" type="checkbox" />
        <h2>I accpet the terms and cuntinue to register</h2>
        </div>
        <button className="items-center justify-center py-3 text-center text-white bg-red-600 tex px-36 md:px-24 md:py-4 ">Register Now</button>
      </div>

      
    </div>
  )
}

export default Howtoreg
