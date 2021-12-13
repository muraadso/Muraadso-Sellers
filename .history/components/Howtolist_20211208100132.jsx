import React from 'react'

const Howtoreg = () => {
  return (
    <div className="flex flex-col md:p-16 howtoreg mb-36">
      <div className="grid items-center justify-between md:grid-cols-2 registerdoc">
        <div className="space-y-4 regcontent">
          <h1 className="text-xl font-bold text-gray-900 md:text-4xl">Alaabtaada habkan uso diiwaan geli</h1>
          <p className="text-lg text-gray-800 ">kadib marka laguu ogolaado in aad soo diiwaan gelisid alaabtaada
waxaa muhiim ah in aad qaadid talaabooyinkan si alaabta aad 
u diiwaan gelisid ay uga soo muuqato Bogga MURAADSO</p>
            <ol className="ml-4 space-y-2 font-medium text-gray-900 list-decimal">
              <li>magaca alaabta oo dhamaystiran</li>
              <li>faahfaahinta alaabta </li>
              <li>xaddiga aad ka haysid alaabta </li>
              <li>qiimaha alaabta </li>
              <li>categoryga ay ka tirsantaha</li>
              <li>brand-ka alaabta ama shirkada smaysay</li>
              <li>4 ama 3 sawir oo quality-goodu sareeyo</li>
              <li>alaabta features-keeda</li>
              <li>brand-ka alaabta ama shirkada smaysay</li>
            </ol>
        </div>
        <div className="flex items-center justify-end regimage">
          <img className="regimage" src="/images/dashboard.png" alt="" />
        </div>
        
      </div>
     

      
    </div>
  )
}

export default Howtoreg
