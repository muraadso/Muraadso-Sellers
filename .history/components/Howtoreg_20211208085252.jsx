import React from 'react'

const Howtoreg = () => {
  return (
    <div className="flex flex-col md:p-16 howtoreg">
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
      <div className="grid grid-cols-3 acceptterms">
        <input type="checkbox" />
        <h2>I accpet the terms and cuntinue to register</h2>
        <button>Is Diiwaan Geli</button>
      </div>

      
    </div>
  )
}

export default Howtoreg
