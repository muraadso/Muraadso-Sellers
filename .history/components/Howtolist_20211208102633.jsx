import React from 'react'
import ReactPlayer from 'react-player'


const Howtoreg = () => {
  return (
    <div className="flex flex-col space-y-11 md:space-y-24 md:p-16 howtoreg">
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
              <li>alaabta tag-skeeda ama keywordskeda</li>
            </ol>
        </div>
        <div className="flex items-center justify-end regimage">
          <img className="regimage" src="/images/dashboard.png" alt="" />
        </div>
        
      </div>
      
      <div className="space-y-6 watch">
          <h1 className="text-lg text-center md:font-bold md:text-xl">Ama Daawo Video-gan Kuu Sharaxaya Habka looso geliyo Product</h1>
         <div className='flex items-center justify-center w-full player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='hhttps://www.youtube.com/watch?v=qS5MdsgyWb4&t=5s'
        style={{
            backgroundColor: '#ff0000'
        }}
          
        />
      </div>
      </div>
     

      
    </div>
  )
}

export default Howtoreg
