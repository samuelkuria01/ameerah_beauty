import React from 'react'
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1699884918926 (1).json'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div>
      <div>
        <img className='pinkhome' alt='pink' src='https://aromantic.co.uk/cdn/shop/articles/shutterstock_1361221601.png?v=1637588991'></img>
        
          <div className='ameerahname'>
            <h2>AMEERAH
            <span><p>ORGANICS</p></span>
            </h2>

            <div className='lottie'>
              <Lottie animationData={animationData} />
            </div>
          </div>
          
          <div className='homecontent2'>
            <h2>We provide the best herbal cosmetic products  to provide defined skin structure</h2>
          </div>

          <div className='homebtn'>
              <button>
                <Link className='linkbtn1' to='About'>GET STARTED</Link>
                </button>
          </div>
      </div>
    </div>
  )
}
