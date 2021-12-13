import React from 'react'

const Howtoreg = () => {
  return (
    <div>
      <h1>This Should be registration doc</h1>
      <div className="grid grid-cols-2 registerdoc">
        <div className="regcontent">
          <h1>Sidee isku diiwaan gelin kartaa</h1>
          <p>intaadan iska diiwaan gelin ka hor waxa aad u baahantahay in aad
            soo buuxisid shuruudahan hoos ku xusan .</p>
            <ol className="ml-4 list-decimal">
              <li>Business Email</li>
              <li>Passport / National ID Card</li>
              <li>Phone Number / Marchent Account </li>
              <li>Business Government Registration</li>
            </ol>
        </div>
        <div className="regimage">
          <img className="h-8" src="/images/registration.png" alt="" />
        </div>
        
      </div>

      
    </div>
  )
}

export default Howtoreg
