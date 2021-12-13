import React from 'react'

const Howtoreg = () => {
  return (
    <div className="flex flex-col md:flex-row md:p-16 howtoreg">
      <div className="grid items-center justify-between md:grid-cols-2 registerdoc">
        <div className="regcontent">
          <h1 className="text-2xl font-bold text-gray-900 md:text-4xl">Sidee isku diiwaan gelin kartaa ?</h1>
          <p className="text-lg text-gray-800 ">intaadan iska diiwaan gelin ka hor waxa aad u baahantahay in aad
            soo buuxisid shuruudahan hoos ku xusan .</p>
            <ol className="ml-4 text-gray-900 list-decimal">
              <li>Business Email</li>
              <li>Passport / National ID Card</li>
              <li>Phone Number / Marchent Account </li>
              <li>Business Government Registration</li>
            </ol>
        </div>
        <div className="flex items-center justify-end regimage">
          <img className="h-96" src="/images/registration.png" alt="" />
        </div>
        
      </div>

      
    </div>
  )
}

export default Howtoreg
